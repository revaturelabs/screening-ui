import { Component, OnInit } from '@angular/core';
import { NgbTabset, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { SkillType } from '../../entities/SkillType';
import { SkillTypesService } from '../../services/skill-types/skill-types.service';
import { Category } from '../../entities/Category';
import { Weight } from '../../entities/Weight';
import { CategoriesService } from '../../services/categories/categories.service';
import { AlertsService } from '../../services/alert-service/alerts.service';
import { SkillTypeCategoryService } from '../../services/skillTypeCategoryLookup/skill-type-category.service';

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

    public skillTypes: SkillType[] = [];
    public inactiveSkillTypes: any[] = [];
    public allSkillTypes: SkillType[] = [];
    public allCategories: Category[] = [];
    public categoryWeightSum = 0;
    public categoriesAndWeights = [];
    public skillType: SkillType;
    public singleSkillType: SkillType;
    public singleSkillTypeCategories: Category[] = [];
    public error: boolean;
    public modalServiceRef;
    public singleSkillTypeCategoryIds: number[] = [];

    public skillTypeWeights: Weight[] = [];
    public allWeights: Weight[] = [];

    public relaventWeights: Weight[] = [];

    public Weight: Weight;

      /** variable to hold category being edited */
    currSkillType: SkillType;

    constructor(
        private modalService: NgbModal,
        private fb: FormBuilder,
        private skillTypeService: SkillTypesService,
        private skillTypeCategoryService: SkillTypeCategoryService,
        private categoriesService: CategoriesService,
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
    * If there are any categories associated to the skill type,
    * set the array to the selected categories to the array
    * @param skillType: selected skill type
    */
    editSkillType(skillType : SkillType) {
        this.grabAllSkillTypes();
        this.singleSkillTypeCategories = [];
        this.singleSkillType = {
            title: skillType.title,
            skillTypeId: skillType.skillTypeId,
            active: true,
        };
        this.grabAllSkillTypes();
        this.grabAllCategories();
        this.getAssociated();
    }

    getAssociated() {
        for (let i = 0; i < this.allCategories.length; i++) {
            if (this.checkContains(this.allCategories[i])) {
                if (!this.singleSkillTypeCategoryIds.includes(this.allCategories[i].categoryId)) {
                    this.singleSkillTypeCategories.push(this.allCategories[i]);
                    this.singleSkillTypeCategoryIds.push(this.allCategories[i].categoryId);
                }
            }
        }
    }
  
    checkContains(category: Category) {
        if (this.singleSkillType) {
            for (let i = 0; i < this.allWeights.length; i++) {
                if (this.allWeights[i].skillType.title === this.singleSkillType.title) {
                    if (this.allWeights[i].category.categoryDescription === category.categoryDescription) {                        
                      return true;
                    }
                }
            }
        }
                return false;
    }

    /**
    * Adds a new category object to the selected skill type.
    * Set weight of new category to be 0
    * Add the categoryId to the array of Ids of selected skill type
    * @param category: category object needed to be added to skill types.
    */
    addToSkillTypeCategories(bucky: Category) {
        if (this.singleSkillType) {
            const relationship: Weight = {
                category: bucky,
                skillType: this.singleSkillType,
                weightValue: 0,
                weightId: 0
            };
            this.skillTypeCategoryService.newSkillTypeForCategory(relationship);
            this.grabAllCategories();
            this.getAllWaits();
            this.getAssociated();
        }
    }

    /**
    * Removes all references to the category that is associated to the skill type
    * @param category: category object to be removed from all associates to the skill type
    */
    removeFromSkillTypeCategories(category) {
        if (this.singleSkillType) {
            const modSkillTypeCategories = [];
            for (let i = 0; i < this.singleSkillTypeCategories.length; i++) {
                if (this.singleSkillTypeCategories[i].categoryId !== category.categoryId) {
                    modSkillTypeCategories.push(this.singleSkillTypeCategories[i]);
                }
            }
            this.singleSkillTypeCategories = modSkillTypeCategories.slice();
            // need a weight ID from category
            let removed: number;
            for (let j = 0; j < this.allWeights.length; j++) {
                if (this.allWeights[j].category.categoryId === category.categoryId) {
                    // delete the weight
                    this.skillTypeCategoryService.deleteWeight(this.allWeights[j].weightId);
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
    * Updates the selected skill type with the added categories and categoryWeightSum
    * If there are categories added to the skill type, the weight percentage of the categories
    * has to sum to 100. When the form is valid, the reference to the open modal will close
    * and an HTTP Request is sent to the endpoint to update the skill type and relations
    * If the categories
    */
    updateSkillType(modal: SkillType) {
        this.skillType = modal;
        this.skillType.skillTypeId = this.singleSkillType.skillTypeId;
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
                categoriesId.push(this.singleSkillTypeCategoryIds[index]);
                weights.push(this.categoriesAndWeights[index].weights);
            }
            this.skillTypeService.updateSkillTypeCategories(this.skillType, categoriesId, weights).subscribe(results => {
                this.grabAllSkillTypes();
            });
            this.savedSuccessfully();
        } else {
            this.error = true;
        }
    }

    /**
    * Checks the sum of category weights that are associated to the selected skill types
    * If there are categories associated to the skill type and the sum is not 100, an error will appear and save button is disabled
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

    compareAlphabetically(a: Category, b: Category) {
        if(a.isActive && a.categoryDescription.toLocaleLowerCase() < b.categoryDescription.toLocaleLowerCase()){
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
        this.singleSkillType = null;
        this.error = false;
        this.singleSkillTypeCategoryIds = [];

    }

    savedSuccessfully() {
        this.alertsService.success('Saved successfully');
    }

    testing() {
        this.tab.activeId = 'tab-2';
    }

    getAllWaits() {
        this.skillTypeCategoryService.getAllWeights().subscribe(results => {
            this.allWeights = results;
        });
    }
    ngOnInit() {
        this.grabAllSkillTypes();
        this.grabAllCategories();
        this.getAllWaits();
    }

}
