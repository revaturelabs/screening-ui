import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QuestionScore } from '../../entities/QuestionScore';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../urls/url.service';

/*
Exchanges data between QuestionBank (the table) and Question (the modal) components.
*/
@Injectable()
export class QuestionScoreService {

  constructor(
    private httpClient: HttpClient,
    private urlService: UrlService
    ) { }

  // Used for sharing data between question table and answer modal
  questionScores: QuestionScore[] = [];

  // questionsQuestionsSource tracks the value of answeredQuestions
  // and allows values to be sent to answeredQuestions
  private questionScoresSource = new BehaviorSubject<QuestionScore[]>(this.questionScores);

  // used to retrieve and populate answeredQuestions in the data table component
  // and answer modal component
  currentQuestionScores = this.questionScoresSource.asObservable();

  // update the array of answered questions
  updateQuestionScores(questionScores: QuestionScore[]) {
    this.questionScoresSource.next(questionScores);
  }

  // save the question to the database
  postQuestionScore(question: QuestionScore): void {

    this.httpClient.post<QuestionScore>(this.urlService.questionScoring.scoringQuestion(), {
      Score: question.score,
      Comment: question.commentary,
      QuestionID: question.questionId,
      BeginTime: question.beginTime,
      bucketId: question.bucketId,
      ScreeningID: question.screeningID}).subscribe(data => {
      });

    /*
      return this.httpClient.post<QuestionScore>(url, {
      Score: question.score,
      Comment: question.commentary,
      QuestionID: question.questionId,
      BeginTime: question.beginTime,
      ScreeningID: question.screeningID
      });
    */
  }
}
