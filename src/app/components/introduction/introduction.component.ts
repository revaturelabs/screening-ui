import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormArray, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { SimpleTraineeService } from '../../services/simpleTrainee/simple-trainee.service';
import { SkillTypeService } from '../../services/skillType/skill-type.service';
import { TagService } from '../../../services/tag/tag.service';
import { ScreeningService } from '../../services/screening/screening.service';

import { Tag } from '../../entities/tag';
import { SkillType } from '../../entities/skillType';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})

/*
  When the interview begins, candidate will give a short intro about themselves
  including a list of their technical skills (Java, SQL, HTML, etc).
  The screener will check the skills the candidate lists (required),
  flag any soft skill violations (optional) and give general
  feedback on the candidates introduction (optional).
*/
export class IntroductionComponent implements OnInit {

  constructor(
    public tagService: TagService,
    private simpleTraineeService: SimpleTraineeService,
    private skillTypeService: SkillTypeService,
    private screeningService: ScreeningService) { }


  public traineeName: string;
  public traineeTrack: string;

  public tagList: Tag[];

  public comment: string;

  form = new FormGroup({
    comment: new FormControl('', [])
  });

  ngOnInit() {
    this.tagService.tagListChecked = [];
    this.traineeName = this.simpleTraineeService.getSelectedCandidate().firstname + ' ' +
      this.simpleTraineeService.getSelectedCandidate().lastname;
    this.traineeTrack = this.simpleTraineeService.getSelectedCandidate().skillTypeName;
    this.getTags();
  }

  // Get an array of all tags and assign it to tagList
  getTags(): void {
    this.tagService.getAllTags().subscribe(
      allTags => {
        this.tagList = allTags;
      }
    );
  }

  // When a tag is checked or unchecked on the Introduction view, update the list of checked tags.
  // Push checked tags to the tagListChecked array
  // Splice unchecked tags from the tagListChecked array
  updateTagList(changedTag: Tag, checked: boolean) {

    if (checked) {
      this.tagService.tagListChecked.push(changedTag);
    } else {
      const index = this.tagService.tagListChecked.findIndex(x => x === changedTag);
      this.tagService.tagListChecked.splice(index, 1);
    }
  }

  // Submit the comments on the Introduction view when the "Begin Questions" buton is clicked
  onSubmit() {
    // Send the comments to the appropriate service method saves them to the DB
    this.screeningService.submitIntroComment(this.comment);
  }

  // Returns a boolean depending on whether a tag was checked.
  // Returns false if there are checked tags.
  skillChosen(): boolean {
    return (!(this.tagService.tagListChecked.length > 0));
  }
}
