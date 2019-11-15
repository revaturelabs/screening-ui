import { Component, OnInit } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

// Classes
import { Candidate } from "../../entities/Candidate";
import { ScheduledScreening } from "../../entities/ScheduledScreening";

// Services
import { ScreeningStateService } from "../../services/screening-state/screening-state.service";
import { ScreeningService } from "../../services/screening/screening.service";
import { ScheduledScreeningService } from "../../services/scheduled-screening/scheduled-screening.service";
import { SoftSkillsViolationService } from "../../services/soft-skills-violation/soft-skills-violation.service";
import { QuestionScoreService } from "../../services/question-score/question-score.service";

// Installed Modules
// npm install ngx-pagination --save
import { NgxPaginationModule } from "ngx-pagination"; // <-- import the module
import { SearchPipe } from "../../pipes/search.pipe";

@Component({
  selector: "app-candidates-screening-list",
  templateUrl: "./candidates-screening-list.component.html",
  styleUrls: ["./candidates-screening-list.component.css"],
  providers: [SearchPipe, NgxPaginationModule]
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
  // when a screener (user) clicks on a screening,
  // save the candidate and scheduled screening
  // to their respective services.
  selectedScheduledScreening: ScheduledScreening;
  // Flag for displaying the "Begin Interview" prompt
  showBeginScreeningPrompt = false;
  // fields that are necessary for Jenkins to build.
  // Do not delete
  searchText; // text in search bar
  p; // current page

  /* ###########################
       CONSTRUCTOR and INIT
  ########################### */
  constructor(
    private screeningStateService: ScreeningStateService,
    private screeningService: ScreeningService,
    private scheduledScreeningService: ScheduledScreeningService,
    private softSkillsViolationService: SoftSkillsViolationService,
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
    this.scheduledScreenings = this.scheduledScreeningService.getScheduledScreenings();
  }

  // Reveals the "Begin Interview" prompt
  toggleBeginScreeningPrompt() {
    if (this.showBeginScreeningPrompt) {
      return "block";
    } else {
      return "none";
    }
  }

  // clicking "Begin Interview" will save the candidate for later use
  confirmSelectedCandidate(): void {
    this.screeningStateService.setCurrentScreening(
      this.selectedScheduledScreening
    );
  }

  // clicking "Begin Interview" will create a new screening entry in the database
  beginScreening(): void {
    let screeningId: String;
    let trackId: String;
    // create a new screening entry in the database by calling the screening service
    this.screeningService
      .beginScreening(
        // must provide the current scheduled interview object
        this.selectedScheduledScreening,
        // create a new date which signifies the start of the interview
        new Date(),
        // This was not part of our iteration, but the "1" must be replaced
        // with the screener's ID so that there is an association
        // between the interviewer and the person who screened them.
        1
      )
      .subscribe(
        // take the data from the response from the database
        data => {
          // and save the screening ID as a cookie to localStorage.
          // localStorage.setItem('screeningID', this.selectedScheduledScreening.scheduledScreeningId.toString());
          // localStorage.setItem('trackID', this.selectedScheduledScreening.track.trackId.toString());
          screeningId = this.selectedScheduledScreening.scheduledScreeningId.toString();
          trackId = this.selectedScheduledScreening.track.trackId.toString();
        }
      );
  }
}
