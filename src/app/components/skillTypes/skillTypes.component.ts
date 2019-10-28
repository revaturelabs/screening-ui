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
      if (val.weightValue === 0) {
        this.noZeroError = true;
      }
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
      active: true
    };

    // POPULATING ARRAY WITH INDIVIDUAL SKILLTYPE WEIGHTS
    for (let weight of this.allWeights) {
      if (weight.skillType.skillTypeId === skillType.skillTypeId) {

        this.skillWeights.push(weight);
      }
    }
    // this.skillTypeToEdit = this.singleSkillType;
    // console.log(this.singleSkillType);
    this.getAssociated();
  }

  getAssociated() {
    for (let i = 0; i < this.allBuckets.length; i++) {
      if (this.checkContains(this.allBuckets[i])) {
        if (
          !this.singleSkillTypeBuckets.includes(this.allBuckets[i])
        ) {
          this.singleSkillTypeBuckets.push(this.allBuckets[i]);
          // this.bucketsAndWeights = this.singleSkillTypeBuckets;
          this.singleSkillTypeBucketIds.push(this.allBuckets[i].bucketId);
        }
      }
    }
  }

  checkContains(bucket: Bucket) {
    if (this.singleSkillType) {
      for (let i = 0; i < this.allWeights.length; i++) {
        if (this.allWeights[i].skillType.title === this.singleSkillType.title) {
          if (
            this.allWeights[i].bucket.bucketId ===
            bucket.bucketId
          ) {
            this.skillTypeWeights.push(this.allWeights[i]);
            return true;
          }
        }
      }
    }
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
    }
  }

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
      active: false
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
    }
  }

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

  /** used to compare SkillType Array to sort it based on status */
  compare(a: SkillType, b: SkillType) {
    if (a.active) {
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
