import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

// Entities
import { Question } from '../../entities/Question';
import { Category } from '../../entities/Category';
import { QuestionScore } from '../../entities/QuestionScore';
import { ScheduledScreening } from '../../entities/ScheduledScreening';
import { TrackCategoryLookUp } from '../../entities/TrackCategoryLookup';

// Services
import { QuestionsService } from '../../services/questions/questions.service';
import { QuestionScoreService } from '../../services/question-score/question-score.service';
import { TrackCategoryService } from '../../services/track-category/track-category.service';

// Modal for answering the question
import { AnswerComponent } from '../answer/answer.component';

// ngbootstrap modal
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ScreeningService } from '../../services/screening/screening.service';
import { ScreeningStateService } from '../../services/screening-state/screening-state.service';
import { Weight } from '../../entities/Weight';

@Component({
  selector: 'app-questions-table',
  templateUrl: './questions-table.component.html',
  styleUrls: ['./questions-table.component.css']
})
/*
After the candidate has given their introduction,
the screener will proceed to the question-and-answer part of the interview.
A list of questions will be fetched from the server / database.
Screener will be able to see a set of bucket tabs,
each of which has a set of questions in a table.

Screener has the ability to navigate between tabs ad nauseam,
asking whichever questions they desire. When a screener asks a question,
it will invoke an instance of the question component.

*/
export class QuestionsTableComponent implements OnInit, OnDestroy {
  // Used to display the categories
  questionCategories: Category[];

  // holds the current bucket. Used to control
  // which questions are displayed in the questions table.
  currentCategory: number;
  trackID: number;

  // Used to display the current track:
  currentScreenings: ScheduledScreening;

  // Used to display current categories in track:
  trackCategoryLookUp: TrackCategoryLookUp;

  // value entered enables finish button
  generalComment: string;

  weight: Weight;

  // Array of questions answered during the interview
  questionScores: QuestionScore[] = [];

  // The candidate's name
  candidateName: string;

  questionsInCategory: Question[];
  // used on ngOnDestroy. Will unsubscribe from all observables
  // to prevent memory leaks
  subscriptions: Subscription[] = [];

  constructor(
    private questionService: QuestionsService,
    private questionScoreService: QuestionScoreService,
    private modalService: NgbModal,
    private screeningService: ScreeningService,
    private screeningStateService: ScreeningStateService,
    private trackCategoryService: TrackCategoryService
  ) {}

  ngOnInit() {
    // use trackCategoryLookup that provides array of categories and array of weights
    this.trackID = this.screeningStateService.getTrackID();
    this.subscriptions.push(
      this.trackCategoryService
        .getWeightsByTrack(this.trackID)
        .subscribe(categoriesWithWeights => {
          const myCategories: Category[] = [];
          for (const e of categoriesWithWeights) {
            myCategories.push({
              categoryId: e.category.categoryId,
              categoryDescription: e.category.categoryDescription,
              isActive: e.category.isActive
            });
          }
          this.trackCategoryService.categoriesByWeight = categoriesWithWeights;
          this.questionCategories = categoriesWithWeights;
        })
    );

    this.candidateName = this.screeningStateService.getCurrentScreening().candidate.name;
    this.currentScreenings = this.screeningStateService.getCurrentScreening();
    // update the answeredQuestions variable in our service to track the
    // questions that have been given a score by the screener.
    this.subscriptions.push(
      this.questionScoreService.currentQuestionScores.subscribe(
        questionScores => (this.questionScores = questionScores)
      )
    );
  }

  // Unsubscribe to prevent memory leaks when component is destroyed
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe);
    // if (this.questionCategories !== undefined) {
    //   for (const category of this.questionCategories) {
    //   }
    // }
  }

  // sets the current bucket, allowing for dynamic change
  // of the questions being displayed.
  setCategory(categoryID: number) {
    // iterate through each category
    // if the current category's id matches the category id
    // of the category selected by the user
    this.currentCategory = categoryID;
    this.questionService
      .getCategoryQuestions(categoryID)
      .subscribe(questions => {
        this.questionsInCategory = questions;
      });
  }

  open(question: Question) {
    // this is commented out because the modal is failing to open and breaking the page.
    // const modalRef = this.modalService.open("AnswerComponent"); //AnswerComponent should be injected into this modal
    // modalRef.componentInstance.question = question;
  }

  // used to display the green question mark on answered questions
  isAnsweredQuestion(question: Question): boolean {
    // iterate through the array of question scores
    for (const q of this.questionScores) {
      // if the current question score's question ID matches the question parameter's id
      if (q.questionId === question.questionId) {
        return true;
      }
    }
  }

  // Method that controls whether the user is allowed to click the submit button
  submitAllowed(): boolean {
    let allowed = true;

    if (this.generalComment) {
      if (this.generalComment.length < 1) {
        allowed = false;
      }
    } else {
      allowed = false;
    }
    return !allowed;
  }

  // Method that calls the servce method, submitting the screener's general comments.
  saveFeedback() {
    // tslint:disable-next-line:radix
    this.screeningService.updateScreening(
      parseInt(localStorage.getItem('screeningID'))
    );
  }
}
