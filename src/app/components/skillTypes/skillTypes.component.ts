import { Component, OnInit } from '@angular/core';
import { NgbTabset, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { SkillType } from '../../entities/SkillType';
import { SkillTypesService } from '../../services/skill-types/skill-types.service';
import { Bucket } from '../../entities/Bucket';
import { Weight } from '../../entities/Weight';
import { BucketsService } from '../../services/buckets/buckets.service';
import { AlertsService } from '../../services/alert-service/alerts.service';

@Component({
    selector: 'app-skill-types',
    templateUrl: './skillTypes.component.html',
    styleUrls: ['./skillTypes.component.css'],
})

/**
 * TO DO:
 *  RENAME TO WEIGHTS
 * This component should probably be rewitten because it is a mess right now
 *
 * You will need to see implementation in the skills service relating to the
 * skillType controler.
 * Whats working:
 * Creating a skill type and editing a skill
 *
 * Whats not working:
 * assigning buckets to skill types is not working.
 * adding weights needs to be added functionality does not exist
 */

/**
* Skill Type Component displays a template containing all the skill types from the database
* It also has access to modals that can create or edit a skill types
*
*
* @author chanconan
*/
export class SkillTypesComponent implements OnInit {

    public skillTypes: SkillType[] = [];
    public inactiveSkillTypes: any[] = [];
    public allSkillTypes: SkillType[] = [];
    public allBuckets: Bucket[] = [];
    public bucketWeightSum = 0;
    public bucketsAndWeights = [];
    public skillType: SkillType;
    public singleSkillType: SkillType;
    public singleSkillTypeBuckets: Bucket[];
    public error: boolean;
    public modalServiceRef;
    public singleSkillTypeBucketIds: number[] = [];

    public Weight: Weight;

    constructor(
        private modalService: NgbModal,
        private fb: FormBuilder,
        private skillTypeService: SkillTypesService,
        private bucketsService: BucketsService,
        private alertsService: AlertsService,
        private tab: NgbTabset,
    ) { }

    removeElement(item: any) {
        let thing: any;
        for (let i = 0; i < this.allSkillTypes.length; i++) {
            thing = this.allSkillTypes[i];
            if (thing.skillTypeName === item.skillTypeName) {
                if (thing.isActive) {
                    thing.isActive = !thing.isActive;
                    this.skillTypeService.deactivateSkillType(thing.skillTypeId).subscribe();
                } else {
                    thing.isActive = !thing.isActive;
                    this.skillTypeService.activateSkillType(thing.skillTypeId).subscribe();
                }
            }
            this.setSkillTypes();
        }
    }
    setSkillTypes() {
        let thing: any;
        this.skillTypes = [];
        this.inactiveSkillTypes = [];
        for (let i = 0; i < this.allSkillTypes.length; i++) {
            thing = this.allSkillTypes[i];
            if (thing.isActive === true) {
                this.skillTypes[this.skillTypes.length] = thing;
            } else if (thing.isActive === false) {
                this.inactiveSkillTypes[this.inactiveSkillTypes.length] = thing;
            }
        }
    }

    skillTypeUpdate(skillType: SkillType) {
        this.skillTypeService.updateSkillType(skillType).subscribe(results => {
            this.grabAllSkillTypes();
        });
    }

    /**
    * Opens the modal for creating and editing skill SkillType
    * Resets fields clears the data within set fields
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
    * Stores information about the skill type that was selected
    * If there are any buckets associated to the skill type,
    * set the array to the selected buckets to the array
    * @param skillType: selected skill type
    */
    editSkillType(skillType) {
        this.singleSkillType = {
            title: skillType.title,
            skillTypeId: skillType.skillTypeId,
            isActive: true,
        };
        this.skillTypeService.getBucketsBySkillType(skillType.skillTypeId).subscribe(results => {
            for (let i = 0; i < results.length; i++) {
                this.singleSkillTypeBucketIds.push(results[i].bucketId);
            }
        });

    }

    /**
    * Checks which buckets are currently associated with the selected skill Type
    * If a bucket from all buckets already belong to the selected skill type, hide the bucket
    * Includes with objects giving wrong results, so used an
    * array of bucket ids to utilize the includes method.
    * @param bucketId: Id of single bucket
    */
    checkContains(bucketId) {
        if (this.singleSkillType) {
            return this.singleSkillTypeBucketIds.includes(bucketId);
        }
        return false;
    }

    /**
    * Adds a new bucket object to the selected skill type.
    * Set weight of new bucket to be 0
    * Add the bucketId to the array of Ids of selected skill type
    * @param bucket: bucket object needed to be added to skill types.
    */
    addToSkillTypeBuckets(bucket: Bucket) {
        // if (this.singleSkillType) {
        //     this.singleSkillType.buckets.push(bucket);
        //     // this auto sets weights for all buckets assigned to zero.
        //     this.singleSkillType.weights.push(0);
        //     this.singleSkillTypeBucketIds.push(bucket.bucketId);
        //     this.combineBucketsAndWeights();
        // }
    }

    /**
    * Removes all references to the bucket that is associated to the skill type
    * @param bucket: bucket object to be removed from all associates to the skill type
    */
    removeFromSkillTypeBuckets(bucket) {
        // if (this.singleSkillType) {
        //     for (const singleBucketIndex in this.singleSkillType.buckets) {
        //         if (this.singleSkillType.buckets[singleBucketIndex].bucketCategory === bucket) {
        //             this.singleSkillType.weights.splice(Number(singleBucketIndex), 1);
        //             this.singleSkillTypeBucketIds.splice(Number(singleBucketIndex), 1);
        //             this.bucketsAndWeights.splice(Number(singleBucketIndex), 1);
        //             this.singleSkillType.buckets.splice(Number(singleBucketIndex), 1);
        //         }
        //     }
        //     this.combineBucketsAndWeights();
        // }
    }

    /**
    * If there are existing buckets, set the current weight percent to the skill types so when
    * it combines the buckets and weights fields, it has updated data.
    * Clear the array holding the buckets and weights information.
    * Combines the buckets and weights field of the selected skill types
    */
    combineBucketsAndWeights() {
        // if (this.bucketsAndWeights.length !== 0) {
        //     for (const index of this.bucketsAndWeights) {
        //         this.singleSkillType.weights[index] = this.bucketsAndWeights[index].weights;
        //     }
        // }
        // this.bucketsAndWeights = [];
        // for (const bucket of this.singleSkillType.buckets) {
        //     this.bucketsAndWeights.push({'bucketCategory': bucket.bucketCategory,
        //         'weights': this.singleSkillType.weights});
        // }
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
    * Updates the selected skill type with the added buckets and bucketWeightSum
    * If there are buckets added to the skill type, the weight percentage of the buckets
    * has to sum to 100. When the form is valid, the reference to the open modal will close
    * and an HTTP Request is sent to the endpoint to update the skill type and relations
    * If the buckets
    */
    updateSkillType(modal: SkillType) {
        this.skillType = modal;
        this.skillType.skillTypeId = this.singleSkillType.skillTypeId;
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
                bucketsId.push(this.singleSkillTypeBucketIds[index]);
                weights.push(this.bucketsAndWeights[index].weights);
            }
            this.skillTypeService.updateSkillTypeBuckets(this.skillType, bucketsId, weights).subscribe(results => {
                this.grabAllSkillTypes();
            });
            this.savedSuccessfully();
        } else {
            this.error = true;
        }
    }

    /**
    * Creates a new skill type to be created
    * Grabs all the skill types after the information has been submitted
    * @param modal: Form information from the modal, with parameters matching the SkillType entity
    */

    createNewSkillType(modal: SkillType) {
        this.skillType = modal;
        this.skillTypeService.createSkillType(this.skillType).subscribe(results => {
            this.grabAllSkillTypes();
        });
        this.savedSuccessfully();
    }

    /**
    * Checks the sum of bucket weights that are associated to the selected skill types
    * If there are buckets associated to the skill type and the sum is not 100, an error will appear and save button is disabled
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
    * Grabs all skill types and stores the information into a variable
    */
    grabAllSkillTypes() {
        this.skillTypeService.getSkillTypes().subscribe((results) => {
            this.allSkillTypes = results;
            this.setSkillTypes();
            this.allSkillTypes.sort(this.compare);
        });
    }

    /** used to compare SkillType Array to sort it based on status */
    compare(a: SkillType, b: SkillType) {
        if (a.isActive) {
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
        });
    }

    /**
    * Resets all fields that were used for the modal
    */
    resetFields() {
        this.singleSkillType = null;
        this.bucketsAndWeights = [];
        this.error = false;
        this.singleSkillTypeBucketIds = [];
    }

    savedSuccessfully() {
        this.alertsService.success('Saved successfully');
    }

    testing() {
        this.tab.activeId = 'tab-2';
    }

    ngOnInit() {
        this.grabAllSkillTypes();
        this.grabAllBuckets();
    }

}
