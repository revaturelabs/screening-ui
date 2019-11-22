import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ScreeningStateService } from '../../services/screening-state/screening-state.service';
import { ScreeningService } from '../../services/screening/screening.service';
import { ScheduledScreening } from '../../entities/ScheduledScreening';

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
  constructor(
    private screeningStateService: ScreeningStateService,
    private screeningService: ScreeningService
  ) {}

  public currentScreening: ScheduledScreening;
  public comment: string;

  form = new FormGroup({
    comment: new FormControl('', [])
  });

  ngOnInit() {
    this.currentScreening = this.screeningStateService.getCurrentScreening();
  }

  // Submit the comments on the Introduction view when the "Begin Questions" button is clicked
  onSubmit() {
    // Send the comments to the appropriate service method saves them to the DB
    this.screeningService.createScreening();
  }
}
