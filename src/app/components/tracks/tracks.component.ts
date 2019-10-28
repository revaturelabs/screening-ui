import { Component, OnInit } from '@angular/core';
import { NgbTabset, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { Track } from '../../entities/Track';
import { TracksService } from '../../services/tracks/tracks.service';
import { Category } from '../../entities/Category';
import { Weight } from '../../entities/Weight';
import { CategoriesService } from '../../services/categories/categories.service';
import { AlertsService } from '../../services/alert-service/alerts.service';
import { TrackCategoryService } from '../../services/trackCategoryLookup/track-category.service';

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
    public allCategories: Category[] = [];
    public categoryWeightSum = 0;
    public categoriesAndWeights = [];
    public track: Track;
    public singleTrack: Track;
    public singleTrackCategories: Category[] = [];
    public error: boolean;
    public modalServiceRef;
    public singleTrackCategoryIds: number[] = [];

    public trackWeights: Weight[] = [];
    public allWeights: Weight[] = [];

    public relaventWeights: Weight[] = [];

    public Weight: Weight;

      /** variable to hold category being edited */
    currTrack: Track;

    constructor(
        private modalService: NgbModal,
        private fb: FormBuilder,
        private trackService: TracksService,
        private trackCategoryService: TrackCategoryService,
        private categoriesService: CategoriesService,
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
    * Opens the modal for creating and editing Track
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
    * If there are any categories associated to the track,
    * set the array to the selected categories to the array
    * @param track: selected track
    */
    editTrack(track : Track) {
        this.grabAllTracks();
        this.singleTrackCategories = [];
        this.singleTrack = {
            title: track.title,
            trackId: track.trackId,
            active: true,
        };
        this.grabAllTracks();
        this.grabAllCategories();
        this.getAssociated();
    }

    getAssociated() {
        for (let i = 0; i < this.allCategories.length; i++) {
            if (this.checkContains(this.allCategories[i])) {
                if (!this.singleTrackCategoryIds.includes(this.allCategories[i].categoryId)) {
                    this.singleTrackCategories.push(this.allCategories[i]);
                    this.singleTrackCategoryIds.push(this.allCategories[i].categoryId);
                }
            }
        }
    }
  
    checkContains(category: Category) {
        if (this.singleTrack) {
            for (let i = 0; i < this.allWeights.length; i++) {
                if (this.allWeights[i].track.title === this.singleTrack.title) {
                    if (this.allWeights[i].category.categoryDescription === category.categoryDescription) {                        
                      return true;
                    }
                }
            }
        }
                return false;
    }

    /**
    * Adds a new category object to the selected track.
    * Set weight of new category to be 0
    * Add the categoryId to the array of Ids of selected track
    * @param category: category object needed to be added to tracks.
    */
    addToTrackCategories(bucky: Category) {
        if (this.singleTrack) {
            const relationship: Weight = {
                category: bucky,
                track: this.singleTrack,
                weightValue: 0,
                weightId: 0
            };
            this.trackCategoryService.newTrackForCategory(relationship);
            this.grabAllCategories();
            this.getAllWaits();
            this.getAssociated();
        }
    }

    /**
    * Removes all references to the category that is associated to the track
    * @param category: category object to be removed from all associates to the track
    */
    removeFromTrackCategories(category) {
        if (this.singleTrack) {
            const modTrackCategories = [];
            for (let i = 0; i < this.singleTrackCategories.length; i++) {
                if (this.singleTrackCategories[i].categoryId !== category.categoryId) {
                    modTrackCategories.push(this.singleTrackCategories[i]);
                }
            }
            this.singleTrackCategories = modTrackCategories.slice();
            // need a weight ID from category
            let removed: number;
            for (let j = 0; j < this.allWeights.length; j++) {
                if (this.allWeights[j].category.categoryId === category.categoryId) {
                    // delete the weight
                    this.trackCategoryService.deleteWeight(this.allWeights[j].weightId);
                    // remove from list
                    removed = j;
                }
            }
            this.allWeights.splice(removed, 1);
        }
    }

    /**
    * Makes sure that the weight percentage input is within 0 and 100
    * @param index: Weight percentage of a single category.
    */
    checkMinMax(index: number) {
        if (this.categoriesAndWeights[index].weights > 100) {
            this.categoriesAndWeights[index].weights = 100;
        } else if (this.categoriesAndWeights[index].weights < 0) {
            this.categoriesAndWeights[index].weights = 0;
        }
    }

    /**
    * Updates the selected track with the added categories and categoryWeightSum
    * If there are categories added to the track, the weight percentage of the categories
    * has to sum to 100. When the form is valid, the reference to the open modal will close
    * and an HTTP Request is sent to the endpoint to update the track and relations
    * If the categories
    */
    updateTrack(modal: Track) {
        this.track = modal;
        this.track.trackId = this.singleTrack.trackId;
        this.categoryWeightSum = 0;
        if (this.categoriesAndWeights.length !== 0) {
            for (const index of this.categoriesAndWeights) {
                this.categoryWeightSum += this.categoriesAndWeights[index].weights;
            }
        }
        if (this.categoryWeightSum === 100 || this.categoriesAndWeights.length === 0) {
            this.modalServiceRef.close();
            const categoriesId = [];
            const weights = [];
            for (const index of this.categoriesAndWeights) {
                categoriesId.push(this.singleTrackCategoryIds[index]);
                weights.push(this.categoriesAndWeights[index].weights);
            }
            this.trackService.updateTrackCategories(this.track, categoriesId, weights).subscribe(results => {
                this.grabAllTracks();
            });
            this.savedSuccessfully();
        } else {
            this.error = true;
        }
    }

    /**
    * Checks the sum of category weights that are associated to the selected tracks
    * If there are categories associated to the track and the sum is not 100, an error will appear and save button is disabled
    */
    checkCategorySum() {
        this.categoryWeightSum = 0;
        for (const category of this.categoriesAndWeights) {
            this.categoryWeightSum += category.weights;
        }
        if (this.categoriesAndWeights.length === 0) {
            this.error = false;
        } else if (this.categoryWeightSum === 100) {
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

    compareAlphabetically(a: Category, b: Category) {
        if(a.isActive && a.categoryDescription.toLocaleLowerCase() < b.categoryDescription.toLocaleLowerCase()){
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
    * Grabs all categories and stores the information into a variable
    */
    grabAllCategories() {
        this.categoriesService.getAllCategories().subscribe(results => {
            this.allCategories = results;
            this.allCategories.sort(this.compareAlphabetically);
        });
    }

    /**
    * Resets all fields that were used for the modal
    */
    resetFields() {
        this.singleTrack = null;
        this.error = false;
        this.singleTrackCategoryIds = [];

    }

    savedSuccessfully() {
        this.alertsService.success('Saved successfully');
    }

    testing() {
        this.tab.activeId = 'tab-2';
    }

    getAllWaits() {
        this.trackCategoryService.getAllWeights().subscribe(results => {
            this.allWeights = results;
        });
    }
    ngOnInit() {
        this.grabAllTracks();
        this.grabAllCategories();
        this.getAllWaits();
    }

}
