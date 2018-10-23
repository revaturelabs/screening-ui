import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ViolationType } from '../../entities/ViolationType';
import { ViolationTypeService } from '../../services/violationType/violationType.service';
import { SoftSkillsViolationService } from '../../services/soft-skills-violation/soft-skills-violation.service';
import { SimpleTraineeService } from '../../services/simpleTrainee/simple-trainee.service';
import { AlertsService } from '../../services/alert-service/alerts.service';
import { SoftSkillViolation } from '../../entities/SoftSkillViolation';
import { VIOLATION_TYPES } from '../../mock-data/mock-violationTypes';
@Component({
  selector: 'app-violation-flag',
  templateUrl: './violation-flag.component.html',
  styleUrls: ['./violation-flag.component.css']
})

/*
For a given set of "soft skill" violations
(using profanity, not professionally dressed, rudeness, etc),
the screener is able to add a "flag" for a soft skill violation.
Upon a given incident the screener can select the type(s) of violation
that occurred and add a message giving specific explanation.

This component is included in several others,
to ensure quick access during the entire interview.
*/

export class ViolationFlagComponent implements OnInit {

  @Output() flagEvent = new EventEmitter<string>();

  violationTypes: ViolationType[] = VIOLATION_TYPES; //Mock Data taken from mock-violationTypes
  violationTypesChecked: ViolationType[] = [];
  softSkillViolations: SoftSkillViolation[];
  selectedViolation: ViolationType;
  public candidateName: string;
  public addViolation = false;
  public violationComment: string;

  constructor(
    private violationService: SoftSkillsViolationService,
    private simpleTraineeService: SimpleTraineeService,
    private violationTypeService: ViolationTypeService,
    private alertsService: AlertsService,
  ) { }

  ngOnInit() {
    console.log()
    this.getViolationTypes();
    this.candidateName = this.simpleTraineeService.getSelectedCandidate().firstname + ' ' +
      this.simpleTraineeService.getSelectedCandidate().lastname;
  }

  

  getViolationTypes(): void {
    this.violationTypeService.getViolationTypes().subscribe(
      violationTypes => {
        this.violationTypes =violationTypes;
      }, err => console.error('Observer got an error: ' + err)
    );
  }

  toggleAddViolation(){
    this.addViolation = !this.addViolation;
  }
  updateViolationList(changedViolationType: ViolationType, checked: boolean) {
    if (checked) {
      this.violationTypesChecked.push(changedViolationType);
    } else {
      const index = this.violationTypesChecked.findIndex(x => x === changedViolationType);
      this.violationTypesChecked.splice(index);
    }
  }

  submitViolation(violationType: ViolationType, comment: string): void {
    // Send request with the violation + comments
    const screeningID = Number.parseInt(localStorage.getItem('screeningID'));
    this.alertsService.success('Soft Skill Violation Added');
    this.violationTypeService.getAllViolationTypes().subscribe(data => {console.log(data)
    }, err => console.error('Observer got an error: ' + err)
    );
    this.flagChange();

    this.violationService.softSkillViolations.push({
      violationID: undefined,
      screeningID: +localStorage.getItem('screeningID'),
      violationType: violationType,
      time: new Date(),
      comment: comment
    });
    this.violationService.submitViolation(violationType, comment, screeningID).subscribe(data => {
      console.log(data);
    }, err => console.error('Observer got an error: ' + err)
    );
    
  }

  cancelViolation() {
    return undefined;
  }

  flagChange() {
    this.flagEvent.emit('update');
  }

}
