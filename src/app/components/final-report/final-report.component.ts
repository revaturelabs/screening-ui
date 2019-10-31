import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScreeningService } from '../../services/screening/screening.service';
import { ScreeningStateService } from '../../services/screening-state/screening-state.service';
import { TrackCategoryService } from '../../services/trackCategoryLookup/track-category.service';
import { QuestionScoreService } from '../../services/question-score/question-score.service';
import { QuestionScore } from '../../entities/QuestionScore';
import { ScoresToCategoriesUtil } from '../../util/scoresToCategories.util';
import { AlertsService } from '../../services/alert-service/alerts.service';
import { SoftSkillsViolationService } from '../../services/soft-skills-violation/soft-skills-violation.service';
import { SoftSkillViolation } from '../../entities/SoftSkillViolation';
import { Subscription } from 'rxjs';
import { Track } from '../../entities/Track';
import { Candidate } from '../../entities/Candidate';

@Component({
  selector: 'app-final-report',
  templateUrl: './final-report.component.html',
  styleUrls: ['./final-report.component.css'],
  providers: [ScoresToCategoriesUtil]
})

/*
A simple text summary of how the candidate performed
in each category on technical skills, the overall feedback therein,
and if the candidate passed or failed their soft skills evaluation.
Screener can copy the summary to the clipboard, and return to the candidate list.
*/

export class FinalReportComponent implements OnInit, OnDestroy {

  candidate: Candidate;
  track: Track;
  softSkillString: string;
  categoryStringArray: string[];
  overallScoreString: string;
  generalNotesString: string;
  allTextString: string;

  questionScores: QuestionScore[];
  softSkillViolations: SoftSkillViolation[];
  public checked: string;
  subscriptions: Subscription[] = [];

  constructor(
    private screeningService: ScreeningService,
    private screeningStateService: ScreeningStateService,
    private trackCategoryService: TrackCategoryService,
    private questionScoreService: QuestionScoreService,
    private scoresToCategoriesUtil: ScoresToCategoriesUtil,
    private alertsService: AlertsService,
    private softSkillsViolationService: SoftSkillsViolationService
  ) { }

  ngOnInit() {
    this.checked = 'false';
    this.candidate = this.screeningStateService.getCurrentScreening().candidate;
    this.softSkillString = 'Soft Skills: ' + this.screeningService.softSkillsResult;
    this.allTextString = this.softSkillString + '\n';
    this.questionScoreService.currentQuestionScores.subscribe(
      questionScores => {
        this.questionScores = questionScores;
        // need to get the skilltype of the screening from something other than the Candidate.
        this.trackCategoryService.getWeightsByTrack(0).subscribe(
          weights => {
            this.categoryStringArray =
            this.scoresToCategoriesUtil.getFinalBreakdown(this.questionScores, weights);
          }
        );
        // Set the composite score in the screening service
        this.screeningService.compositeScore = +this.categoryStringArray[this.categoryStringArray.length - 1];
        this.categoryStringArray.splice(this.categoryStringArray.length - 1, 1);

        this.overallScoreString = this.categoryStringArray[this.categoryStringArray.length - 1];
        this.categoryStringArray.splice(this.categoryStringArray.length - 1, 1);

        this.categoryStringArray.forEach(categoryString => {
          this.allTextString += categoryString + '\n';
        });
        this.allTextString += this.overallScoreString + '\n';
      });
    // this.overallScoreString = "Overall: 71%";
    this.generalNotesString = this.screeningService.generalComments;
    this.allTextString += '"' + this.generalNotesString + '"';

    this.screeningService.endScreening(this.generalNotesString);
    this.subscriptions.push(this.softSkillsViolationService.currentSoftSkillViolations.subscribe(
      softSkillViolations => (this.softSkillViolations = softSkillViolations)
    ));
  }

  // Used for copying the data to the clipboard (this is done using ngx-clipboard)
  copyToClipboard() {
    this.checked = 'true';
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.allTextString;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.alertsService.success('Copied to Clipboard');
  }

  ngOnDestroy() {
    // Called once before the instance is destroyed.
    // Empty the appropriate arrays, clean local storage and unsubscribe from subscriptions in this component.
    this.questionScores = [];
    this.questionScoreService.updateQuestionScores(this.questionScores);
    this.softSkillViolations = [];
    this.softSkillsViolationService.updateSoftSkillViolations(this.softSkillViolations);
    localStorage.removeItem('screeningID');
    localStorage.removeItem('scheduledScreeningID');
    this.subscriptions.forEach(s => s.unsubscribe);
  }
}
