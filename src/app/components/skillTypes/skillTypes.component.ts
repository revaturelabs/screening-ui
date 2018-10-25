import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { NgbTabset, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillType } from '../../entities/SkillType';
import { SkillTypesService } from '../../services/skill-types/skill-types.service';
import { Bucket } from '../../entities/Bucket';
import { Weight } from '../../entities/Weight';
import { BucketsService } from '../../services/buckets/buckets.service';
import { AlertsService } from '../../services/alert-service/alerts.service';
import { SkillTypeBucketService } from '../../services/skillTypeBucketLookup/skill-type-bucket.service';
import { MethodCall } from '@angular/compiler';

@Component({
    selector: 'app-skill-types',
    templateUrl: './skillTypes.component.html',
    styleUrls: ['./skillTypes.component.css'],
})

/**
* Skill Type Component displays a template containing all the skill types from the database
* It also has access to modals that can create or edit a skill types
*
*
* @author chanconan
*/
export class SkillTypesComponent implements OnInit {

    public allSkillTypes: SkillType[] = [];
    public allBuckets: Bucket[] = [];
    public bucketWeightSum = 0;
    public skillType: SkillType;
    public singleSkillType: SkillType;
    public unassociatedSkillTypeBuckets: Bucket[] = [];
    public error: boolean;
    public modalServiceRef;
    public skillTypeWeights: Weight[] = [];
    public allWeights: Weight[] = [];

    constructor(
        private modalService: NgbModal,
        private skillTypeService: SkillTypesService,
        private skillTypeBucketService: SkillTypeBucketService,
        private bucketsService: BucketsService,
        private alertsService: AlertsService,
        private tab: NgbTabset,
    ) { }

    //Updates a skillType then retrieves all Skill types
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
        this.skillTypeWeights = [];
        this.singleSkillType = {
            title: skillType.title,
            skillTypeId: skillType.skillTypeId,
            active: skillType.active,
        };
        this.getAssociated();
    }
    /**
     * Finds weight associated with singleSkillType 
     * by comparing skillTypeId to each object in 
     * allWeights. Adds weight object to skillTypeWeights
     * as associations are found.
     * 
     * Creates a deep copy of allBuckets to display in the 
     * modal. Removes unassociated bucket as associations 
     * are found. 
     */
    getAssociated() { //When editing, get bucket(categories) that area associated with skillType(track)
        this.unassociatedSkillTypeBuckets = [];
        // Make deep copy of allBuckets into unassociatedSkillTypeBuckets
        for (let i = 0; i < this.allBuckets.length; i++) {
            this.unassociatedSkillTypeBuckets.push(this.allBuckets[i]);
        }

        //console.log(this.unassociatedSkillTypeBuckets);
        for (let i = 0; i < this.allWeights.length; i++) {
            if (this.allWeights[i].skillType.skillTypeId === this.singleSkillType.skillTypeId) {
                this.skillTypeWeights.push(this.allWeights[i]);

                let index = this.unassociatedSkillTypeBuckets.findIndex(temp => temp.bucketId === this.allWeights[i].bucket.bucketId);
                this.unassociatedSkillTypeBuckets.splice(index, 1);
            }
        }
    }

    /** 
    * Removes bucket from unassociatedSkillTypeBuckets 
    * @param bucket: Add/Remove bucket from arrays
    */
    removeUnassociatedBucket(bucket: Bucket) {
        //Remove bucket from unassociated arr
        let index = this.unassociatedSkillTypeBuckets.findIndex(temp => temp.bucketId === bucket.bucketId);
        this.unassociatedSkillTypeBuckets.splice(index, 1);
    }

    /**
    * Adds a new bucket object to the selected skill type.
    * Set weight of new bucket to be 0
    * Add the bucketId to the array of Ids of selected skill type
    * @param bucket: bucket object needed to be added to skill types.
    */
    addToSkillTypeBuckets(bucky: Bucket) {
        if (this.singleSkillType) {
            const relationship: Weight = {
                bucket: bucky,
                skillType: this.singleSkillType,
                weightValue: 0,
                weightId: 0
            };
            this.skillTypeBucketService.newSkillTypeForBucket(relationship).subscribe(results => {
                this.getAllWeights();
                this.grabAllBuckets();
                this.removeUnassociatedBucket(results.bucket);
                this.skillTypeWeights.push(results);
            });
        }
    }

    /**
    * Removes all references to the bucket that is associated to the skill type
    * @param bucket: bucket object to be removed from all associates to the skill type
    */
    removeFromSkillTypeBuckets(bucket) {
        if (this.singleSkillType) {
            for (let j = 0; j < this.allWeights.length; j++) {
                if (this.allWeights[j].bucket.bucketId === bucket.bucketId) {
                    if (this.allWeights[j].skillType.skillTypeId === this.singleSkillType.skillTypeId) {
                        // delete the weight
                        this.skillTypeBucketService.deleteWeight(this.allWeights[j].weightId).subscribe(result => {
                            this.getAllWeights();
                        });
                        //Remove from associated and add to unassociated buckets
                        this.unassociatedSkillTypeBuckets.push(this.allWeights[j].bucket);
                        this.removeWeight(this.allWeights[j].weightId);
                    }
                }
            }
        }
    }

    /**
     * Removes weight from skillTypeWeights based on weightId
     * @param weightId: Id of weight 
     */
    removeWeight(weightId: number) {
        let index = this.skillTypeWeights.findIndex(temp => temp.weightId === weightId);
        this.skillTypeWeights.splice(index, 1);
    }

    /**
    * Makes sure that the weight percentage input is within 0 and 100
    * @param index: Weight percentage of a single bucket.
    */
    checkMinMax(weight: Weight) {
        if (weight.weightValue > 100) {
            let index = this.skillTypeWeights.findIndex(temp => temp.weightId === weight.weightId);
            this.skillTypeWeights[index].weightValue = 100;
            this.checkBucketSum();
        } else if (weight.weightValue < 0) {
            let index = this.skillTypeWeights.findIndex(temp => temp.weightId === weight.weightId);
            this.skillTypeWeights[index].weightValue = 0;
            this.checkBucketSum();
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
        if (this.skillTypeWeights.length !== 0) {
            for (const index of this.skillTypeWeights) {
                this.bucketWeightSum += index.weightValue;
            }
        }
        if (this.bucketWeightSum === 100 || this.skillTypeWeights.length === 0) {
            this.modalServiceRef.close();
            const bucketsId = [];
            for (const weight of this.skillTypeWeights) {
                bucketsId.push(weight.bucket.bucketId);
                this.updateWeight(weight);
            }
            this.skillTypeService.updateSkillTypeBuckets(this.skillType, bucketsId).subscribe(results => {
            });
            this.grabAllSkillTypes();
            this.savedSuccessfully();
        } else {
            this.error = true;
        }
    }

    /**
     * Finds correct weightId from all Weights. Updates weight using weight param.
     * @param weight: weight object to update
     */
    updateWeight(weight: Weight) {
        let index = this.allWeights.findIndex(temp => temp.weightId === weight.weightId);
        this.allWeights[index].weightValue = weight.weightValue;
        this.skillTypeBucketService.updateWeight(this.allWeights[index]).subscribe(results => { });
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
     * Delete weights associated with skillType. Delete skillType
     * @param skillType: skillType to be deleted
     */
    deleteSkillType(skillType: SkillType) {
        //Delete weights associated with skillType
        for (let i = 0; i < this.allWeights.length; i++) {
            if (this.allWeights[i].skillType.skillTypeId === skillType.skillTypeId) {
                this.allWeights.splice(i,1);
                this.skillTypeBucketService.deleteWeight(this.allWeights[i].weightId).subscribe(results => { });
            }
        }
        let index = this.allSkillTypes.findIndex(temp => temp.skillTypeId === skillType.skillTypeId);
        this.allSkillTypes.splice(index, 1);
        this.skillTypeService.deleteSkillTypeById(skillType.skillTypeId).subscribe(results => {
        });
    }

    /**
    * Checks the sum of bucket weights that are associated to the selected skill types
    * If there are buckets associated to the skill type and the sum is not 100, an error will appear and save button is disabled
    */
    checkBucketSum() {
        this.bucketWeightSum = 0;
        for (const weight of this.skillTypeWeights) {
            this.bucketWeightSum += weight.weightValue;
        }
        if (this.skillTypeWeights.length === 0) {
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
            this.allSkillTypes = this.customSort(results);
        });
    }
    /** used to compare SkillType Array to sort it based on status. skillType array is then alphabetized */
    customSort(skillTypes: SkillType[]): SkillType[] {
        skillTypes.sort(this.compare);
        let active: SkillType[] = [];
        let inactive: SkillType[] = [];
        const index = skillTypes.indexOf(skillTypes.find(skillType => skillType.active === false));
        active = skillTypes.slice(0, index).sort(this.alphabetize);
        inactive = skillTypes.slice(index).sort(this.alphabetize);
        skillTypes = index !== -1 ? active.concat(inactive) : skillTypes.sort(this.alphabetize);
        return skillTypes;
    }

    compare(a: SkillType, b: SkillType) {
        if (a.active) {
            return -1;
        } else {
            return 1;
        }
    }

    alphabetize(a: SkillType, b: SkillType) {
        if (a.title.toUpperCase() < b.title.toUpperCase()) {
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
        this.skillTypeWeights = [];
        this.error = false;
    }

    savedSuccessfully() {
        this.alertsService.success('Saved successfully');
    }

    testing() {
        this.tab.activeId = 'tab-2';
    }

    getAllWeights() {
        this.skillTypeBucketService.getAllWeights().subscribe(results => {
            this.allWeights = results;
        });

    }
    ngOnInit() {
        this.grabAllSkillTypes();
        this.grabAllBuckets();
        this.getAllWeights();
    }
}
