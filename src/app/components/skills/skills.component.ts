
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Bucket } from '../../entities/Bucket';
import { GambitSkillService } from '../../services/skill/gambit-skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {
  newBucket: Bucket = {
    bucketId: 0,
    bucketDescription: '',
    isActive: true
  };

  addForm: FormGroup;

  buckets: Bucket[];
  currentBucket: Bucket;

  columns;
  numColumns: number;
  constructor(private modalService: NgbModal, private skillService: GambitSkillService, private fb: FormBuilder) {
  }

  /**
   * Loads all Skills
   * @memberof SkillsComponent
   */
  ngOnInit() {
    this.initFormControl();
    this.skillService.findAll().subscribe((resp) => {
      this.buckets = resp;
      this.numColumns = this.buckets.length / 8 + 1;
      if (this.numColumns > 3) {
        this.numColumns = 3;
      }
      this.columns = Array.apply(null, { length: this.numColumns }).map(Number.call, Number);
    });
  }

  resetFormControl() {
    this.addForm = this.fb.group({
      'name': ['', Validators.required]
    });
  }

  initFormControl() {
    this.addForm = this.fb.group({
      'name': [this.newBucket.bucketDescription, Validators.required]
    });
  }

  /**
   * Adds a new Skill
   * @param {any} value
   * @memberof SkillsComponent
   */
  addNewBucket(value) {
    this.newBucket.bucketDescription = value.name;
    this.newBucket.isActive = true;
    this.skillService.create(this.newBucket).subscribe((succ) => {
      this.buckets.push(succ);
    });
    // may not need this statement without all of the inherited subjects
    this.resetFormControl();
  }

  /**
   * Rewrote to actual work and send correct information.
   * Responsible for updating a skill on name change or active change
   *
   * @author Michael Adedigba | 1803-USF-MAR26 | Wezley Singleton
   */
  editCurrentSkill() {
    this.skillService.update(this.currentBucket).subscribe((resp) => {
      const idx = this.buckets.findIndex(bucket => bucket.bucketId === resp.bucketId);
      this.buckets[idx] = resp;
    });
  }

  /**
   * Populates the Columns with buckets
   * @param {any} column
   * @param {any} index
   * @returns
   * @memberof SkillsComponent
   */
  nextColumn(column, index) {
    switch (column) {
      case 0:
        if (index < this.buckets.length / this.numColumns) {
          return true;
        }
        break;
      case 1:
        if (index > this.buckets.length / this.numColumns) {
          // If the numbers of buckets is 3 then this condition will activate
          if (this.numColumns === 3) {
            if (index < ((this.buckets.length / this.numColumns) * 2)) {
              return true;
            } else {
              return false;
            }
          } else {
            return true;
          }
        }
        break;
      case 2:
        if (index > ((this.buckets.length / this.numColumns) * 2)) {
          return true;
        } break;
      default:
        break;
    }
  }

  /**
   * Opens a Modal
   * @param {any} content
   * @memberof SkillsComponent
   */
  open(content) {
    this.modalService.open(content).result.then((result) => {
    }, (reason) => {
    });
  }

  /**
   * Open the edit modal
   * @param {any} content
   * @param {Skill} index
   * @memberof SkillsComponent
   */
  editopen(content, index: Bucket) {
    this.currentBucket = JSON.parse(JSON.stringify(index)); // essentially clone the object, there may be a better way
    this.modalService.open(content);
  }
}
