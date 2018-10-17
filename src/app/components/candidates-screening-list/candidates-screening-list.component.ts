import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Classes
import { SimpleTrainee } from '../../entities/SimpleTrainee';
import { ScheduledScreening } from '../../entities/ScheduleScreening';
import { SkillType } from '../../entities/SkillType';

// Services
import { SimpleTraineeService } from '../../services/simpleTrainee/simple-trainee.service';
import { ScreeningService } from '../../services/screening/screening.service';
import { ScheduleScreeningService } from '../../services/schedule-screening/schedule-screening.service';
import { SoftSkillsViolationService } from '../../services/soft-skills-violation/soft-skills-violation.service';
import { QuestionScoreService } from '../../services/question-score/question-score.service';
import { TRAINEES } from '../../mock-data/mock-simpleTrainees';
import { SkillTypesService} from '../../services/skill-types/skill-types.service';
// Installed Modules
// npm install ngx-pagination --save
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { SearchPipe } from '../../pipes/search.pipe';

@Component({
  selector: 'app-candidates-screening-list',
  templateUrl: './candidates-screening-list.component.html',
  styleUrls: ['./candidates-screening-list.component.css'],
  providers: [SearchPipe]
})

/**
 * This is the landing / homepage for our functionality. There are many candidates that must be screened,
 * and the screeners choose their candidates from a common pool.
 * A screener will choose a candidate from the list, and a modal will appear with the options to
 * begin the interview or return to the list. Candidate list is paginated, with 10 results per page.
 * @export
 * @class CandidatesScreeningListComponent
 * @implements {OnInit}
 */
export class CandidatesScreeningListComponent implements OnInit {
  /* ###########################
        FIELDS
  ########################### */
  // array containing upcoming interviews
  scheduledScreenings: ScheduledScreening[];
  tracks: SkillType[] = [];
  // when a screener (user) clicks on a screening,
  // save the candidate and scheduled screening
  // to their respective services.
  selectedCandidate: SimpleTrainee;
  selectedScheduledScreening: ScheduledScreening;
  // Flag for displaying the "Begin Interview" prompt
  showBeginScreeningPrompt = false;
  // random fields that are necessary for Jenkins to build.
  // Do not delete
  searchText; // text in search bar
  p; // current page

  /* ###########################
       CONSTRUCTOR and INIT
  ########################### */
  constructor(
    private http: HttpClientModule,
    private simpleTraineeService: SimpleTraineeService,
    private screeningService: ScreeningService,
    private scheduleScreeningService: ScheduleScreeningService,
    private softSkillsViolationService: SoftSkillsViolationService,
    private skillTypesService: SkillTypesService,
    private questionScoreService: QuestionScoreService,
    private searchPipe: SearchPipe
  ) {}

  ngOnInit() {
    // Need to unsubscribe from observables after use. However, some memory leaks are still occurring.
    // Quick fix is to check if the following services still have data in their arrays,
    // then refreshing the screen to flush out the data.
    if (
      this.softSkillsViolationService.softSkillViolations.length > 0 ||
      this.questionScoreService.questionScores.length > 0
    ) {
      window.location.reload(true);
    }
    console.log("getting tracklist");
    this.skillTypesService.getSkillTypes().subscribe(
      tracklist =>{
      tracklist.forEach(function(element){
        this.tracks[element.skillTypeId] = element;
      });
    });
    this.scheduleScreeningService.getScheduleScreenings().subscribe(data => {
      this.scheduledScreenings = data;
    });
  }
  /* ###########################
        FUNCTIONS
  ########################### */

  // Unhides the "Begin Interview" prompt
  toggleBeginScreeningPrompt() {
    if (this.showBeginScreeningPrompt) {
      return 'block';
    } else {
      return 'none';
    }
  }

  // clicking "Begin Interview" will save the candidate for later use
  confirmSelectedCandidate(): void {
    this.simpleTraineeService.setSelectedCandidate(this.selectedCandidate);
    //this.selectedScheduledScreening =
  }

  // clicking "Begin Interview" will create a new screening entry in the database
  beginScreening(): void {
    // create a new screening entry in the database by calling the screening service
    this.screeningService
      .beginScreening(
        // must provide the current scheduled interview object
        this.selectedScheduledScreening,
        // create a new date which signifies the start of the interview
        new Date(),
        // This was not part of our iteration, but the "1" must be replaced
        // with the trainer's ID so that their is an association
        // between the interviewer and the person who screened them.
        this.selectedScheduledScreening.trainer,
        // provide the track of the selected candidate for later use.
        this.selectedCandidate.skillTypeID
      )
      .subscribe(
        // take the data from the response from the database
        data => {
        // and save the screening ID as a cookie to localStorage.
        localStorage.setItem('screening', data.toString());
        console.log("New Screening" + localStorage.getItem('screening'));
      });
  }
}
