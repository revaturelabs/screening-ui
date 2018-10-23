import { Component, OnInit, OnChanges } from '@angular/core';
import { ViolationTypeService } from '../../services/violationType/violationType.service';
import { SimpleTraineeService } from '../../services/simpleTrainee/simple-trainee.service';
import { SoftSkillViolation } from '../../entities/SoftSkillViolation';
import { SoftSkillsViolationService } from '../../services/soft-skills-violation/soft-skills-violation.service';
import { Observable } from 'rxjs';
import { ScreeningService } from '../../services/screening/screening.service';

@Component({
  selector: 'app-pass-fail',
  templateUrl: './pass-fail.component.html',
  styleUrls: ['./pass-fail.component.css']
})

/*
Once the question-and-answer phase has been completed,
the screener is directed to this component.
All violation flags specified are listed in a table,
where the flag can be removed if desired.
Screener is able to add any additional flags needed,
and is able to provide optional feedback for candidate's soft skills overall.

The screener must specify if the candidate passed or failed the
soft skills portion of the interview before they can view the final summary.
*/

export class PassFailComponent implements OnInit,OnChanges {

  public candidateName: string;
  previousViolations: any[];
  private passed: boolean;
  violations: any[] = [];  // Needs to be Observable<any[]>
  endScreening = false;
  public disabled = true;
  public passChecked: boolean;
  public failChecked: boolean;
  public hasChecked: boolean;
  private screeningID: number;

  public softSkillFeedback: string;

  constructor(private violationService: SoftSkillsViolationService,
    private screeningService: ScreeningService,
    private simpleTraineeService: SimpleTraineeService,
    private violationTypeService: ViolationTypeService,
    public softSkillViolationService: SoftSkillsViolationService
  ) {
  }
  ngOnChanges(){
    console.log(this.softSkillViolationService.currentSoftSkillViolations);
  }

  ngOnInit() {
    this.disabled = true;
    this.passChecked = false;
    this.failChecked = false;
    const violationArray: any[] = [];
    this.candidateName = this.simpleTraineeService.getSelectedCandidate().firstname + ' ' +
      this.simpleTraineeService.getSelectedCandidate().lastname;
      console.log(+localStorage.getItem('screeningID'));
    this.softSkillViolationService.getPreviousViolations(+localStorage.getItem('screeningID')).subscribe(data => {
      this.previousViolations = data;
      this.softSkillViolationService.softSkillViolations = this.previousViolations;
    });
    console.log(this.previousViolations);
    this.violationTypeService.getAllViolationTypes().subscribe(violationTypes => {
      this.getViolations().subscribe(data => {
        // e = our violations
        for (const e of data) {
          // v = all violation types
          for (const v of violationTypes) {
            if (e.violationID === v.violationID) {
              const thisTime = e.Time;
              const thisComment = e.Comment;
              violationArray.push({
                violationType: { violationType: v.violationTypeText },
                Time: thisTime,
                Comment: thisComment
              });
            }
          }
        }
        this.violations = violationArray;
      });
    }
    );
  }

  // Returns a boolean denoting whether either the "Pass" or "Fail" button was clicked.
  // Controls whether the submit button can be clicked.
  wasClicked(): boolean {
    return this.disabled;
  }


  // Enables the submit button if the "Pass" button is clicked
  updateCheckedPass(checked: boolean) {
    this.passChecked = true;
    if (this.failChecked === true) {
      this.failChecked = false;
    }
    this.disabled = false;
  }

  // Enables the submit button if the "Fail" button is clicked
  updateCheckedFail(checked: boolean) {
    this.failChecked = true;
    if (this.passChecked === true) {
      this.passChecked = false;
    }
    this.disabled = false;
  }

  // Sets the softSkillsResult field in the ScreeningService to the appropriate value
  submit() {
    if (this.passChecked) {
      this.pass();
    } else if (this.failChecked) {
      this.fail();
    }
    this.screeningService.finalSoftSkillComment = this.softSkillFeedback;
    this.screeningService.curScreening.softSkillCommentary = this.softSkillFeedback;
    this.screeningService.curScreening.endDateTime = new Date();
    this.screeningService.curScreening.compositeScore = 100;
    if(this.passed)this.screeningService.curScreening.softSkillsVerdict = true;
    this.screeningService.updateScreening(+localStorage.getItem('screeningID') );
  }

  pass() {
    this.passed = true;
    this.endScreening = true;
    this.screeningService.softSkillsResult = 'Pass';
  }

  fail() {
    this.passed = false;
    this.endScreening = true;
    this.screeningService.softSkillsResult = 'Fail';
  }

  // Returns an Observable with an array of violations associated with the provided screeningID.
  getViolations(): Observable<SoftSkillViolation[]> {
    return this.violationService.getPreviousViolations(+localStorage.getItem('screeningID'));
  }

  // Method to delete a violation when clicking the "Remove" button
  deleteViolation(violationId: number, i: number) {
    this.violationService.deleteViolation(violationId);
    this.softSkillViolationService.updateSoftSkillViolations(this.previousViolations);
    if (this.softSkillViolationService.softSkillViolations.length > 1) {
      this.softSkillViolationService.softSkillViolations.splice(i, 1);
    } else {
      this.softSkillViolationService.softSkillViolations = [];
    }
  }

  getMessage($event) {
    this.softSkillViolationService.getPreviousViolations(+localStorage.getItem('screeningID'))
      .subscribe(data => this.previousViolations = data);
  }

  // Method that detects whether there are any violations exist for the current screening
  hasViolations(): boolean {
    if (this.softSkillViolationService.softSkillViolations === undefined || this.softSkillViolationService.softSkillViolations.length < 1) {
      return false;
    } else {
      return true;
    }
  }


  public getPassed(): string {
    if (this.passed) {
      return 'passed';
    } else {
      return 'failed';
    }
  }

  // Returns the string that's assigned to the [style.display] attribute.
  endScreeningPrompt() {
    if (this.endScreening) {
      return 'block';
    } else {
      return 'none';
    }
  }




}
