import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SimpleTraineeService } from '../../services/simpleTrainee/simple-trainee.service';
import { ScreeningService } from '../../services/screening/screening.service';
import { ViolationTypeService } from '../../services/violationType/violationType.service';
import { SoftSkillViolation } from '../../entities/SoftSkillViolation';
import { SoftSkillsViolationService } from '../../services/soft-skills-violation/soft-skills-violation.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AnswerComponent } from '../answer/answer.component';
import { Screening } from 'src/app/entities/Screening';

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

  newscreening: Screening;

  constructor(
    private simpleTraineeService: SimpleTraineeService,
    private screeningService: ScreeningService) {
      this.newscreening = new Screening();
    }


  public traineeName: string;
  public traineeTrack: string;

  public comment: string;

  form = new FormGroup({
    comment: new FormControl('', [])
  });

  ngOnInit() {
    this.traineeName = this.simpleTraineeService.getSelectedCandidate().firstname + ' ' +
    this.simpleTraineeService.getSelectedCandidate().lastname;
    this.traineeTrack = this.simpleTraineeService.getSelectedCandidate().skillTypeName;
  }


  // Submit the comments on the Introduction view when the "Begin Questions" buton is clicked
  screen() {
    // Send the comments to the appropriate service method saves them to the DB
           // 'status': 'In Progress',
        // 'softSkillVerdict': 0,
        // 'screenerId': 0,
        // 'aboutComments': '',
        // 'generalComments': '',
        // 'softSkillCommentary': '',
        // 'startDate': new Date(),
        // 'endDateTime': '',
        // 'screeningId': localStorage.getItem('screeningID'),
        // 'scheduledScreeningId': localStorage.getItem('scheduledScreeningID'),
        // 'compositeScore': 0
        this.newscreening.status = 'In Progress',
        this.newscreening.skillType = this.simpleTraineeService.getSelectedCandidate().skillTypeId,
        console.log('jajajsaa ' + this.simpleTraineeService.getSelectedCandidate().skillTypeId),
        this.newscreening.softSkillsVerdict = false,
        this.newscreening.softSkillCommentary = '',
        this.newscreening.screenerId = 0,
        this.newscreening.aboutMeCommentary = 'ma',
        this.newscreening.generalCommentary = 'no',
        this.newscreening.startDateTime = new Date(),
        this.newscreening.endDateTime = null,
       // this.newscreening.scheduledScreeningId = parseInt(localStorage.getItem('scheduledScreeningID'), 10);
        this.newscreening.screeningId = parseInt(localStorage.getItem('screeningID'), 10),
        console.log('yoyo');
        console.log(this.newscreening);
    this.screeningService.createScreening(this.newscreening);
  }

}
