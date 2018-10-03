import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SimpleTraineeService } from '../../services/simpleTrainee/simple-trainee.service';
import { ScreeningService } from '../../services/screening/screening.service';


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
    private simpleTraineeService: SimpleTraineeService,
    private screeningService: ScreeningService) { }


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
  onSubmit() {
    // Send the comments to the appropriate service method saves them to the DB
    this.screeningService.submitIntroComment(this.comment);
  }

  // // Returns a boolean depending on whether a tag was checked.
  // // Returns false if there are checked tags.
  // skillChosen(): boolean {
  //   return (!(this.tagService.tagListChecked.length > 0));
  // }
}
