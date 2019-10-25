import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ScreeningStateService } from '../../services/screening-state/screening-state.service';
import { ScreeningService } from '../../services/screening/screening.service';
import { ScheduledScreening } from '../../entities/ScheduledScreening';
import { Screening } from '../../entities/Screening';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})

/*
  When the interview begins, candidate will give a short intro about themselves
  including a list of their technical skills (Java, SQL, HTML, etc).
  The screener will flag any soft skill violations (optional) and give general
  feedback on the candidates introduction (optional).
*/
export class IntroductionComponent implements OnInit {

  newscreening: Screening;

  constructor(
    private screeningStateService: ScreeningStateService,
    private screeningService: ScreeningService) { }

  public currentScreening: ScheduledScreening;
  public comment: string;

  form = new FormGroup({
    comment: new FormControl('', [])
  });

  ngOnInit() {
    this.currentScreening = this.screeningStateService.getCurrentScreening();
  }


  // Submit the comments on the Introduction view when the "Begin Questions" buton is clicked
  screen() {
        this.newscreening.status = 'In Progress',
        this.newscreening.softSkillsVerdict = false,
        this.newscreening.softSkillCommentary = '',
       // this.newscreening.screenerId = 0,
        this.newscreening.aboutMeCommentary = this.comment,
        this.newscreening.generalCommentary = null,
        this.newscreening.startDateTime = new Date(),
        this.newscreening.endDateTime = null,
       // this.newscreening.scheduledScreeningId = parseInt(localStorage.getItem('scheduledScreeningId'), 10);
        this.newscreening.scheduledScreening = JSON.parse(localStorage.getItem('scheduledScreening'));
        this.newscreening.screeningId = parseInt(localStorage.getItem('screeningID'), 10),
        localStorage.setItem('screening', JSON.stringify(this.newscreening));
      //this.screeningService.createScreening(this.newscreening);
  }

}
