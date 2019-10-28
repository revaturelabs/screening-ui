import { Component, OnInit } from '@angular/core';
import { NgbTabset, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { Track } from '../../entities/Track';
import { TracksService } from '../../services/tracks/tracks.service';
import { Bucket } from '../../entities/Bucket';
import { Weight } from '../../entities/Weight';
import { BucketsService } from '../../services/buckets/buckets.service';
import { AlertsService } from '../../services/alert-service/alerts.service';
import { TrackBucketService } from '../../services/trackBucketLookup/track-bucket.service';

@Component({
    selector: 'app-tracks',
    templateUrl: './tracks.component.html',
    styleUrls: ['./tracks.component.css'],
})

/**
* Track Component displays a template containing all the tracks from the database
* It also has access to modals that can create or edit a tracks
*
*
* @author chanconan
*/
export class TracksComponent implements OnInit {

    public tracks: Track[] = [];
    public inactiveTracks: any[] = [];
    public allTracks: Track[] = [];
    public allBuckets: Bucket[] = [];
    public bucketWeightSum = 0;
    public bucketsAndWeights = [];
    public track: Track;
    public singleTrack: Track;
    public singleTrackBuckets: Bucket[] = [];
    public error: boolean;
    public modalServiceRef;
    public singleTrackBucketIds: number[] = [];

    public trackWeights: Weight[] = [];
    public allWeights: Weight[] = [];

    public relaventWeights: Weight[] = [];

    public Weight: Weight;

      /** variable to hold bucket being edited */
    currTrack: Track;

    constructor(
        private modalService: NgbModal,
        private fb: FormBuilder,
        private trackService: TracksService,
        private trackBucketService: TrackBucketService,
        private bucketsService: BucketsService,
        private alertsService: AlertsService,
        private tab: NgbTabset,
    ) { }

    removeElement(item: any) {
        let thing: any;
        for (let i = 0; i < this.allTracks.length; i++) {
            thing = this.allTracks[i];
            if (thing.trackName === item.trackName) {
                if (thing.active) {
                    thing.active = !thing.active;
                    this.trackService.deactivateTrack(thing.trackId).subscribe();
                } else {
                    thing.active = !thing.active;
                    this.trackService.activateTrack(thing.trackId).subscribe();
                }
            }
            this.setTracks();
        }
    }

    setTracks() {
        let thing: any;
        this.tracks = [];
        this.inactiveTracks = [];
        for (let i = 0; i < this.allTracks.length; i++) {
            thing = this.allTracks[i];
            if (thing.isActive === true) {
                this.tracks[this.tracks.length] = thing;
            } else if (thing.isActive === false) {
                this.inactiveTracks[this.inactiveTracks.length] = thing;
            }
        }
    }

    trackUpdate(track: Track) {
        if (track.active) {
            track.active = false;
            this.trackService.deactivateTrack(track).subscribe( track => {
                this.grabAllTracks();
            });
        } else {
            track.active = true;
            this.trackService.activateTrack(track).subscribe( track => {
                this.grabAllTracks();
            });
        }
    }
 
    /**
    * Opens the modal for creating and editing track
    * Resets fields clears the data within set fields
    * ____________________
    * THIS DOES NOT ACTUALLY CLEAR DATA SET IN FIELDS
    * --------------------
    * Creates a variable to reference the open modal service
    */
    open(content) {
        this.modalServiceRef = this.modalService.open(content);
        this.modalServiceRef.result.then((result) => {
            this.resetFields();
        }, (reason) => {
            this.resetFields();
        });
        event.stopPropagation();
    }

    /**
    * Stores information about the track that was selected
    * If there are any buckets associated to the track,
    * set the array to the selected buckets to the array
    * @param track: selected track
    */
    editTrack(track : Track) {
        this.grabAllTracks();
        this.singleTrackBuckets = [];
        this.singleTrack = {
            title: track.title,
            trackId: track.trackId,
            active: true,
        };
        this.grabAllTracks();
        this.grabAllBuckets();
        this.getAssociated();
    }

    getAssociated() {
        for (let i = 0; i < this.allBuckets.length; i++) {
            if (this.checkContains(this.allBuckets[i])) {
                if (!this.singleTrackBucketIds.includes(this.allBuckets[i].bucketId)) {
                    this.singleTrackBuckets.push(this.allBuckets[i]);
                    this.singleTrackBucketIds.push(this.allBuckets[i].bucketId);
                }
            }
        }
    }
  
    checkContains(bucket: Bucket) {
        if (this.singleTrack) {
            for (let i = 0; i < this.allWeights.length; i++) {
                if (this.allWeights[i].track.title === this.singleTrack.title) {
                    if (this.allWeights[i].bucket.bucketDescription === bucket.bucketDescription) {                        
                      return true;
                    }
                }
            }
        }
                return false;
    }

    /**
    * Adds a new bucket object to the selected track.
    * Set weight of new bucket to be 0
    * Add the bucketId to the array of Ids of selected track
    * @param bucket: bucket object needed to be added to tracks.
    */
    addToTrackBuckets(bucky: Bucket) {
        if (this.singleTrack) {
            const relationship: Weight = {
                bucket: bucky,
                track: this.singleTrack,
                weightValue: 0,
                weightId: 0
            };
            this.trackBucketService.newTrackForBucket(relationship);
            this.grabAllBuckets();
            this.getAllWaits();
            this.getAssociated();
        }
    }

    /**
    * Removes all references to the bucket that is associated to the track
    * @param bucket: bucket object to be removed from all associates to the track
    */
    removeFromTrackBuckets(bucket) {
        if (this.singleTrack) {
            const modTrackBuckets = [];
            for (let i = 0; i < this.singleTrackBuckets.length; i++) {
                if (this.singleTrackBuckets[i].bucketId !== bucket.bucketId) {
                    modTrackBuckets.push(this.singleTrackBuckets[i]);
                }
            }
            this.singleTrackBuckets = modTrackBuckets.slice();
            // need a weight ID from bucket
            let removed: number;
            for (let j = 0; j < this.allWeights.length; j++) {
                if (this.allWeights[j].bucket.bucketId === bucket.bucketId) {
                    // delete the weight
                    this.trackBucketService.deleteWeight(this.allWeights[j].weightId);
                    // remove from list
                    removed = j;
                }
            }
            this.allWeights.splice(removed, 1);
        }
    }

    /**
    * Makes sure that the weight percentage input is within 0 and 100
    * @param index: Weight percentage of a single bucket.
    */
    checkMinMax(index: number) {
        if (this.bucketsAndWeights[index].weights > 100) {
            this.bucketsAndWeights[index].weights = 100;
        } else if (this.bucketsAndWeights[index].weights < 0) {
            this.bucketsAndWeights[index].weights = 0;
        }
    }

    /**
    * Updates the selected track with the added buckets and bucketWeightSum
    * If there are buckets added to the track, the weight percentage of the buckets
    * has to sum to 100. When the form is valid, the reference to the open modal will close
    * and an HTTP Request is sent to the endpoint to update the track and relations
    * If the buckets
    */
    updateTrack(modal: Track) {
        this.track = modal;
        this.track.trackId = this.singleTrack.trackId;
        this.bucketWeightSum = 0;
        if (this.bucketsAndWeights.length !== 0) {
            for (const index of this.bucketsAndWeights) {
                this.bucketWeightSum += this.bucketsAndWeights[index].weights;
            }
        }
        if (this.bucketWeightSum === 100 || this.bucketsAndWeights.length === 0) {
            this.modalServiceRef.close();
            const bucketsId = [];
            const weights = [];
            for (const index of this.bucketsAndWeights) {
                bucketsId.push(this.singleTrackBucketIds[index]);
                weights.push(this.bucketsAndWeights[index].weights);
            }
            this.trackService.updateTrackBuckets(this.track, bucketsId, weights).subscribe(results => {
                this.grabAllTracks();
            });
            this.savedSuccessfully();
        } else {
            this.error = true;
        }
    }

    /**
    * Checks the sum of bucket weights that are associated to the selected tracks
    * If there are buckets associated to the track and the sum is not 100, an error will appear and save button is disabled
    */
    checkBucketSum() {
        this.bucketWeightSum = 0;
        for (const bucket of this.bucketsAndWeights) {
            this.bucketWeightSum += bucket.weights;
        }
        if (this.bucketsAndWeights.length === 0) {
            this.error = false;
        } else if (this.bucketWeightSum === 100) {
            this.error = false;
        } else {
            this.error = true;
        }
    }

    /**
    * Grabs all tracks and stores the information into a variable
    */
    grabAllTracks() {
        this.trackService.getTracks().subscribe((results) => {
            this.allTracks = results;
            this.setTracks();
            this.allTracks.sort(this.compareIfTrackIsActive);
            this.setTracks();
            this.allTracks.sort(this.compareActiveTracks);
            this.allTracks.sort(this.compareInactiveTracks);
        });
    }

    compareAlphabetically(a: Bucket, b: Bucket) {
        if(a.isActive && a.bucketDescription.toLocaleLowerCase() < b.bucketDescription.toLocaleLowerCase()){
            return -1;
        }else{
            return 1;
        }
    }

    /** used to compare Track Array to sort it based on status */
    compareIfTrackIsActive(a: Track, b: Track) {
        if (a.active) {
            return -1;
        } else {
            return 1;
        }
    }

    compareActiveTracks(a: Track, b: Track) {
        if (a.active && a.title.toLocaleLowerCase() < b.title.toLocaleLowerCase()) {
          return -1;
        } else {
          return 1;
        }
      }

    compareInactiveTracks(a: Track, b: Track) {
        if (!a.active && !b.active && a.title.toLocaleLowerCase() < b.title.toLocaleLowerCase()) {
            return -1;
        } else {
            return 1;
        }
    }

    /**
    * Grabs all buckets and stores the information into a variable
    */
    grabAllBuckets() {
        this.bucketsService.getAllBuckets().subscribe(results => {
            this.allBuckets = results;
            this.allBuckets.sort(this.compareAlphabetically);
        });
    }

    /**
    * Resets all fields that were used for the modal
    */
    resetFields() {
        this.singleTrack = null;
        this.error = false;
        this.singleTrackBucketIds = [];

    }

    savedSuccessfully() {
        this.alertsService.success('Saved successfully');
    }

    testing() {
        this.tab.activeId = 'tab-2';
    }

    getAllWaits() {
        this.trackBucketService.getAllWeights().subscribe(results => {
            this.allWeights = results;
        });
    }
    ngOnInit() {
        this.grabAllTracks();
        this.grabAllBuckets();
        this.getAllWaits();
    }

}
