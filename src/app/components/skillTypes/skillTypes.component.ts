import { Component, OnInit } from '@angular/core';
import { NgbTabset, NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { SkillType } from '../../entities/SkillType';
import { SkillTypesService } from '../../services/skill-types/skill-types.service';
import { Bucket } from '../../entities/Bucket';
import { Weight } from '../../entities/Weight';
import { BucketsService } from '../../services/buckets/buckets.service';
import { AlertsService } from '../../services/alert-service/alerts.service';
import { SkillTypeBucketService } from '../../services/skillTypeBucketLookup/skill-type-bucket.service';

@Component({
  selector: 'app-skill-types',
  templateUrl: './skillTypes.component.html',
  styleUrls: ['./skillTypes.component.css']
})

/**
<<<<<<< HEAD
 * TO DO:
 *  REWRITE THIS WHOLE DUMPSTER FIRE
 * DO NOT EVEN ATTEMPT TO MAKE THIS MESS WORK
 * IT IS TRASH
 * Abandon hope all ye who enter here
 * Abandon hope all ye who enter here
 * Abandon hope all ye who enter here
 * Abandon hope all ye who enter here
 * Abandon hope all ye who enter here
 * Abandon hope all ye who enter here
 * Abandon hope all ye who enter here
 * Abandon hope all ye who enter here
 * Abandon hope all ye who enter here
 * Abandon hope all ye who enter here
 * Abandon hope all ye who enter here
 * Abandon hope all ye who enter here
 */

/**
 * Skill Type Component displays a template containing all the skill types from the database
 * It also has access to modals that can create or edit a skill types
 *
 *
 * @author chanconan
 */
=======
* Skill Type Component displays a template containing all the skill types from the database
* It also has access to modals that can create or edit a skill types
*
*
* @author chanconan
*/
>>>>>>> 9f992aaec9f4878c19f3226d81484f04dc80ecb1
export class SkillTypesComponent implements OnInit {
  public skillTypes: SkillType[] = [];
  public inactiveSkillTypes: any[] = [];
  public allSkillTypes: SkillType[] = [];
  public allBuckets: Bucket[] = [];
  public bucketWeightSum = 0;
  public bucketsAndWeights = [];
  public skillType: SkillType;
  public singleSkillType: SkillType;
  public singleSkillTypeBuckets: Bucket[] = [];
  public error: boolean;
  public noZeroError: boolean;
  public modalServiceRef;
  public singleSkillTypeBucketIds: number[] = [];
  public skillTypeToEdit: SkillType;
  public skillWeights: Weight[] = [];
  public bucketSum: number[] = [];

  public skillTypeWeights: Weight[] = [];
  public allWeights: Weight[] = [];


  public relaventWeights: Weight[] = [];

<<<<<<< HEAD
  public Weight: Weight;
  closeResult: string;

  inputForm = new FormGroup({
    weightVal: new FormControl('')
  });

  constructor(
    private modalService: NgbModal,
    private modalConfig: NgbModalConfig,
    private fb: FormBuilder,
    private skillTypeService: SkillTypesService,
    private skillTypeBucketService: SkillTypeBucketService,
    private bucketsService: BucketsService,
    private alertsService: AlertsService,
    private tab: NgbTabset
  ) {
    // this.allSkillTypes = SKILLTYPES;
    // console.log(this.allSkillTypes);
  }

  removeElement(item: any) {
    let thing: any;
    for (let i = 0; i < this.allSkillTypes.length; i++) {
      thing = this.allSkillTypes[i];
      if (thing.skillTypeName === item.skillTypeName) {
        if (thing.isActive) {
          thing.isActive = !thing.isActive;
          this.skillTypeService
            .deactivateSkillType(thing.skillTypeId)
            .subscribe();
        } else {
          thing.isActive = !thing.isActive;
          this.skillTypeService
            .activateSkillType(thing.skillTypeId)
            .subscribe();
=======
    public skillTypes: SkillType[] = [];
    public inactiveSkillTypes: any[] = [];
    public allSkillTypes: SkillType[] = [];
    public allBuckets: Bucket[] = [];
    public bucketWeightSum = 0;
    public bucketsAndWeights = [];
    public skillType: SkillType;
    public singleSkillType: SkillType;
    public singleSkillTypeBuckets: Bucket[] = [];
    public error: boolean;
    public modalServiceRef;
    public singleSkillTypeBucketIds: number[] = [];

    public skillTypeWeights: Weight[] = [];
    public allWeights: Weight[] = [];

    public relaventWeights: Weight[] = [];

    public Weight: Weight;

      /** variable to hold bucket being edited */
    currSkillType: SkillType;

    constructor(
        private modalService: NgbModal,
        private fb: FormBuilder,
        private skillTypeService: SkillTypesService,
        private skillTypeBucketService: SkillTypeBucketService,
        private bucketsService: BucketsService,
        private alertsService: AlertsService,
        private tab: NgbTabset,
    ) { }

    removeElement(item: any) {
        let thing: any;
        for (let i = 0; i < this.allSkillTypes.length; i++) {
            thing = this.allSkillTypes[i];
            if (thing.skillTypeName === item.skillTypeName) {
                if (thing.active) {
                    thing.active = !thing.active;
                    this.skillTypeService.deactivateSkillType(thing.skillTypeId).subscribe();
                } else {
                    thing.active = !thing.active;
                    this.skillTypeService.activateSkillType(thing.skillTypeId).subscribe();
                }
            }
            this.setSkillTypes();
>>>>>>> 9f992aaec9f4878c19f3226d81484f04dc80ecb1
        }
      }
      this.setSkillTypes();
    }
<<<<<<< HEAD
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
=======

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
>>>>>>> 9f992aaec9f4878c19f3226d81484f04dc80ecb1
    }
  }

<<<<<<< HEAD
  skillTypeUpdate(skillType: SkillType) {
    this.skillTypeService.updateSkillType(skillType).subscribe(results => {
      this.grabAllSkillTypes();
    });
  }

  /**
   * Opens the modal for creating and editing skill SkillType
   * Resets fields clears the data within set fields
   * ____________________
   * THIS DOES NOT ACTUALLY CLEAR DATA SET IN FIELDS
   * --------------------
   * Creates a variable to reference the open modal service
   */
  open(content) {

    content.backdrop = 'static';
    this.modalServiceRef = this.modalService.open(content);
    // tslint:disable-next-line: prefer-const
    for (let val of this.skillWeights) {
      if(val.weightValue === 0) {
        this.noZeroError = true;
      }
=======
    skillTypeUpdate(skillType: SkillType) {
        if (skillType.active) {
            skillType.active = false;
            this.skillTypeService.deactivateSkillType(skillType).subscribe( skillType => {
                this.grabAllSkillTypes();
            });
        } else {
            skillType.active = true;
            this.skillTypeService.activateSkillType(skillType).subscribe( skillType => {
                this.grabAllSkillTypes();
            });
        }
    }
 
    /**
    * Opens the modal for creating and editing skill SkillType
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
    * Stores information about the skill type that was selected
    * If there are any buckets associated to the skill type,
    * set the array to the selected buckets to the array
    * @param skillType: selected skill type
    */
    editSkillType(skillType : SkillType) {
        this.grabAllSkillTypes();
        this.singleSkillTypeBuckets = [];
        this.singleSkillType = {
            title: skillType.title,
            skillTypeId: skillType.skillTypeId,
            active: true,
        };
        this.grabAllSkillTypes();
        this.grabAllBuckets();
        this.getAssociated();
>>>>>>> 9f992aaec9f4878c19f3226d81484f04dc80ecb1
    }
    this.modalServiceRef.result.then(
      result => {
        this.resetFields();
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.resetFields();
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
    event.stopPropagation();
  }

<<<<<<< HEAD
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  edit(content) {
    this.modalServiceRef = this.modalService.open(content);
    this.modalServiceRef.result.then(
      result => {
        this.resetFields();
      },
      reason => {
        this.resetFields();
      }
    );
    event.stopPropagation();
  }
  /**
   * Stores information about the skill type that was selected
   * If there are any buckets associated to the skill type,
   * set the array to the selected buckets to the array
   * @param skillType: selected skill type
   */


  /* This will work for altering a skill type, but it will not display the change on the page. */
  editSkillType(skillType) {
    // this.bucketWeightSum = 0;
    this.skillWeights = [];
    this.singleSkillTypeBuckets = [];
    this.skillTypeWeights = [];
    this.singleSkillType = {
      title: skillType.title,
      skillTypeId: skillType.skillTypeId,
      isActive: true
    };

    // POPULATING ARRAY WITH INDIVIDUAL SKILLTYPE WEIGHTS
    for (let weight of this.allWeights) {
      if(weight.skillType.skillTypeId === skillType.skillTypeId) {

        this.skillWeights.push(weight);
      }
=======
    getAssociated() {
        for (let i = 0; i < this.allBuckets.length; i++) {
            if (this.checkContains(this.allBuckets[i])) {
                if (!this.singleSkillTypeBucketIds.includes(this.allBuckets[i].bucketId)) {
                    this.singleSkillTypeBuckets.push(this.allBuckets[i]);
                    this.singleSkillTypeBucketIds.push(this.allBuckets[i].bucketId);
                }
            }
        }
    }
  
    checkContains(bucket: Bucket) {
        if (this.singleSkillType) {
            for (let i = 0; i < this.allWeights.length; i++) {
                if (this.allWeights[i].skillType.title === this.singleSkillType.title) {
                    if (this.allWeights[i].bucket.bucketDescription === bucket.bucketDescription) {                        
                      return true;
                    }
                }
            }
        }
                return false;
>>>>>>> 9f992aaec9f4878c19f3226d81484f04dc80ecb1
    }
    // this.skillTypeToEdit = this.singleSkillType;
    // console.log(this.singleSkillType);
    this.getAssociated();
  }


  /**
   * Only darkness within
   */
  getAssociated() {



<<<<<<< HEAD
    for (let i = 0; i < this.allBuckets.length; i++) {
      if (this.checkContains(this.allBuckets[i])) {
        if (
          !this.singleSkillTypeBuckets.includes(this.allBuckets[i])
        ) {
          this.singleSkillTypeBuckets.push(this.allBuckets[i]);
          // this.bucketsAndWeights = this.singleSkillTypeBuckets;
          this.singleSkillTypeBucketIds.push(this.allBuckets[i].bucketId);
=======
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
            this.skillTypeBucketService.newSkillTypeForBucket(relationship);
            this.grabAllBuckets();
            this.getAllWaits();
            this.getAssociated();
>>>>>>> 9f992aaec9f4878c19f3226d81484f04dc80ecb1
        }
      }
    }

<<<<<<< HEAD

    // console.log(this.singleSkillTypeBuckets);



  }



  /**
   * THIS IS BAD!
   * DONT KEEP THIS IMPLEMENTATION
   * IM SORRY FOR ANYONE THAT HAS TO FIX THIS,
   * I WAS GIVIN A PILE OF TRASH AND DIDNT HAVE TIME TO GET TO THIS
   * @param bucket: Id of single bucket
   */
  checkContains(bucket: Bucket) {
    if (this.singleSkillType) {
      for (let i = 0; i < this.allWeights.length; i++) {
        if (this.allWeights[i].skillType.title === this.singleSkillType.title) {
          if (
            this.allWeights[i].bucket.bucketId ===
            bucket.bucketId
          ) {
            this.skillTypeWeights.push(this.allWeights[i]);
            // console.log('this skilltype is associated with : ' + bucket.bucketDescription);
            return true;
          }
=======
    /**
    * Removes all references to the bucket that is associated to the skill type
    * @param bucket: bucket object to be removed from all associates to the skill type
    */
    removeFromSkillTypeBuckets(bucket) {
        if (this.singleSkillType) {
            const modSkillTypeBuckets = [];
            for (let i = 0; i < this.singleSkillTypeBuckets.length; i++) {
                if (this.singleSkillTypeBuckets[i].bucketId !== bucket.bucketId) {
                    modSkillTypeBuckets.push(this.singleSkillTypeBuckets[i]);
                }
            }
            this.singleSkillTypeBuckets = modSkillTypeBuckets.slice();
            // need a weight ID from bucket
            let removed: number;
            for (let j = 0; j < this.allWeights.length; j++) {
                if (this.allWeights[j].bucket.bucketId === bucket.bucketId) {
                    // delete the weight
                    this.skillTypeBucketService.deleteWeight(this.allWeights[j].weightId);
                    // remove from list
                    removed = j;
                }
            }
            this.allWeights.splice(removed, 1);
>>>>>>> 9f992aaec9f4878c19f3226d81484f04dc80ecb1
        }
      }
    }
    // console.log('this skilltype is not associated with : ' + bucket.bucketDescription);
    return false;
  }

  /**
   * Adds a new bucket object to the selected skill type.
   * Set weight of new bucket to be 0
   * Add the bucketId to the array of Ids of selected skill type
   * @param bucket: bucket object needed to be added to skill types.
   */
  addToSkillTypeBuckets(bucky: Bucket) {
    this.noZeroError = true;
    if (this.singleSkillType) {
      let relationship: Weight = {
        bucket: bucky,
        skillType: this.singleSkillType,
        weightValue: 0,
        weightId: 0
      };
      this.skillTypeBucketService.newSkillTypeForBucket(relationship).subscribe(results => {

<<<<<<< HEAD
        relationship.weightId = results.weightId;
        this.allWeights.push(relationship);

      });

      this.skillTypeWeights.push(relationship);
      this.skillWeights.push(relationship);
    }
    this.singleSkillTypeBuckets.push(bucky);
    this.singleSkillTypeBucketIds.push(bucky.bucketId);
  }

  /**
   * Removes all references to the bucket that is associated to the skill type
   * @param bucket: bucket object to be removed from all associates to the skill type
   */
  removeFromSkillTypeBuckets(bucket) {
    if (this.singleSkillType) {
      const modSkillTypeBuckets = [];
      for (let i = 0; i < this.singleSkillTypeBuckets.length; i++) {
        if (this.singleSkillTypeBuckets[i].bucketId !== bucket.bucketId) {
          modSkillTypeBuckets.push(this.singleSkillTypeBuckets[i]);
=======
    /**
    * Makes sure that the weight percentage input is within 0 and 100
    * @param index: Weight percentage of a single bucket.
    */
    checkMinMax(index: number) {
        if (this.bucketsAndWeights[index].weights > 100) {
            this.bucketsAndWeights[index].weights = 100;
        } else if (this.bucketsAndWeights[index].weights < 0) {
            this.bucketsAndWeights[index].weights = 0;
>>>>>>> 9f992aaec9f4878c19f3226d81484f04dc80ecb1
        }
      }
      this.singleSkillTypeBuckets = modSkillTypeBuckets.slice();


      for (let i = 0; i < this.skillWeights.length; i++) {
        if (bucket.bucketId === this.skillWeights[i].bucket.bucketId) {
          this.skillWeights.splice(i, 1);
        }
      }


      // need a weight ID from bucket
      let removed: number;
      for (let j = 0; j < this.allWeights.length; j++) {
        if (this.allWeights[j].bucket.bucketId === bucket.bucketId &&
          this.allWeights[j].skillType.skillTypeId === this.singleSkillType.skillTypeId) {
          // delete the weight
          this.skillTypeBucketService.deleteWeight(this.allWeights[j].weightId).subscribe();
          // remove from list
          removed = j;
        }
      }
      this.allWeights.splice(removed, 1);
    }

<<<<<<< HEAD

  }

  /**
   * Updates the selected skill type with the added buckets and bucketWeightSum
   * If there are buckets added to the skill type, the weight percentage of the buckets
   * has to sum to 100. When the form is valid, the reference to the open modal will close
   * and an HTTP Request is sent to the endpoint to update the skill type and relations
   * If the buckets
   */
  updateSkillType(modal) {
    // this.allSkillTypes.splice(this.allSkillTypes.indexOf(this.singleSkillType), 1);
    // this.singleSkillType.title = modal.skillTypeName;
    let num;
    for (num = 0; num < this.allSkillTypes.length; num++) {
      if (this.allSkillTypes[num].skillTypeId === this.singleSkillType.skillTypeId) {
        this.allSkillTypes[num].title = modal.skillTypeName;
        this.singleSkillType = this.allSkillTypes[num];
      }
    }
    this.bucketWeightSum = 0;
    if (this.bucketsAndWeights.length !== 0) {
      for (const index of this.bucketsAndWeights) {
        this.bucketWeightSum += this.bucketsAndWeights[index].weights;
      }
    }
    const bucketsId = [];
    const weights = [];
    for (const index of this.bucketsAndWeights) {
      bucketsId.push(this.singleSkillTypeBucketIds[index]);
      weights.push(this.bucketsAndWeights[index].weights);
    }
    this.skillTypeService
        .updateSkillTypeBuckets(this.singleSkillType, bucketsId, weights)
        .subscribe(results => {
            this.grabAllSkillTypes();
        });
    this.allSkillTypes.push(this.singleSkillType);
    this.savedSuccessfully();
    this.getAssociated();
    this.grabAllSkillTypes();
  }

  /**
   * Updates weight object to include the inputed weight value
   */
  updateWeight() {
    for (let weight of this.allWeights) {
      this.skillTypeBucketService.updateWeight(weight).subscribe();
=======
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
>>>>>>> 9f992aaec9f4878c19f3226d81484f04dc80ecb1
    }
  }

<<<<<<< HEAD
  /**
   * Creates a new skill type to be created
   * Grabs all the skill types after the information has been submitted
   * @param modal: Form information from the modal, with parameters matching the SkillType entity
   */
  createNewSkillType(modal) {
    // This sort of creates a skill. But it dies after you refresh
    let newSkill: SkillType;
    newSkill = {
      skillTypeId: null,
      title: modal.skillTypeName,
      isActive: false
    };
    this.skillTypeService.createSkillType(newSkill).subscribe(results => {
      this.grabAllSkillTypes();
    });
    this.savedSuccessfully();
  }

  /**
   * Checks the sum of bucket weights that are associated to the selected skill types
   * If there are buckets associated to the skill type and the sum is not 100, an error will appear and save button is disabled
   */

  checkBucketSum(weightValue: number, thisbucket: Bucket, index: number) {
    this.bucketSum[index] = weightValue;
    let num = 0;
    for (let value of this.skillWeights) {
      num += value.weightValue;
      console.log(value.weightValue);

      switch (value.weightValue) {
        case 0:
          this.noZeroError = true;
          break;
        case null:
          this.noZeroError = true;
          break;
        default:
          this.noZeroError = false;

      }
    }

    for (let weight of this.skillWeights) {
      if (this.singleSkillType.skillTypeId === weight.skillType.skillTypeId &&
        thisbucket.bucketId === weight.bucket.bucketId) {
          weight.weightValue = weightValue;
        }
    }

    if (this.allWeights.length === 0) {
      this.error = false;
    } else if (num === 100) {
      this.error = false;
    } else {
      this.error = true;
=======
    /**
    * Grabs all skill types and stores the information into a variable
    */
    grabAllSkillTypes() {
        this.skillTypeService.getSkillTypes().subscribe((results) => {
            this.allSkillTypes = results;
            this.setSkillTypes();
            this.allSkillTypes.sort(this.compareIfTrackIsActive);
            this.setSkillTypes();
            this.allSkillTypes.sort(this.compareActiveTracks);
            this.allSkillTypes.sort(this.compareInactiveTracks);
        });
    }

    compareAlphabetically(a: Bucket, b: Bucket) {
        if(a.isActive && a.bucketDescription.toLocaleLowerCase() < b.bucketDescription.toLocaleLowerCase()){
            return -1;
        }else{
            return 1;
        }
    }

    /** used to compare SkillType Array to sort it based on status */
    compareIfTrackIsActive(a: SkillType, b: SkillType) {
        if (a.active) {
            return -1;
        } else {
            return 1;
        }
    }

    compareActiveTracks(a: SkillType, b: SkillType) {
        if (a.active && a.title.toLocaleLowerCase() < b.title.toLocaleLowerCase()) {
          return -1;
        } else {
          return 1;
        }
      }

    compareInactiveTracks(a: SkillType, b: SkillType) {
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
>>>>>>> 9f992aaec9f4878c19f3226d81484f04dc80ecb1
    }
  }

<<<<<<< HEAD
  /**
   * Grabs all skill types and stores the information into a variable
   */
  grabAllSkillTypes() {
    this.skillTypeService.getSkillTypes().subscribe(results => {
      this.allSkillTypes = results;
      this.setSkillTypes();
      this.allSkillTypes.sort(this.compare);
    });
  }
=======
    /**
    * Resets all fields that were used for the modal
    */
    resetFields() {
        this.singleSkillType = null;
        this.error = false;
        this.singleSkillTypeBucketIds = [];

    }
>>>>>>> 9f992aaec9f4878c19f3226d81484f04dc80ecb1

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
    this.noZeroError = false;
    this.singleSkillTypeBucketIds = [];
    this.bucketSum = [];
  }

  // Deletes SkillType from the database 
  deleteSkillType() {
   // console.log(this.skillTypeToEdit);
  this.skillTypeService.deleteSkillTypebyId(this.singleSkillType.skillTypeId).subscribe(results => {
    this.grabAllSkillTypes();
  });
  }

  savedSuccessfully() {
    this.alertsService.success('Saved successfully');
  }

  testing() {
    this.tab.activeId = 'tab-2';
  }

  getAllWaits() {
    this.skillTypeBucketService.getAllWeights().subscribe(results => {
      this.allWeights = results;
    });
  }
  ngOnInit() {
    this.grabAllSkillTypes();
    this.grabAllBuckets();
    this.getAllWaits();
    this.modalConfig.backdrop = 'static';
    this.modalConfig.keyboard = false;

  }
}
