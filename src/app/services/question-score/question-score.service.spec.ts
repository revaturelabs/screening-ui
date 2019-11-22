import { TestBed, inject } from '@angular/core/testing';
import { QuestionScoreService } from './question-score.service';
import { UrlService } from '../../services/urls/url.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { defer } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { QuestionScore } from '../../entities/QuestionScore';

/**
 * Test for methods on the question - score service.
 *
 * @author Khanh Dang | 1909-QC| Emily Higgins
 *
 * @author Sudipta Saha | 1909-QC| Emily Higgins
 *
 */

/**
 * This describe block is actually using mock data. It uses the same approach as this example:
 * https://angular.io/guide/testing#testing-http-services
 */

// The async observable was produced by an asyncData helper.
export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

export function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}

// declaring mock variables.
const score: QuestionScore = {
  qSID: 1,
  questionId: 2,
  screeningID: 3,
  score: 4,
  commentary: 'Good job',
  categoryId: 5,
  beginTime: null
};

const QUESTIONSCORE: QuestionScore[] = [score];

describe('QuestionScoreService ', () => {
  const testCategory = -1;
  // tslint:disable-next-line:prefer-const
  let httpClientSpyOnPost: { post: jasmine.Spy };
  // tslint:disable-next-line:prefer-const
  let httpClientSpyOnPut: { put: jasmine.Spy };
  let questionscoreService: QuestionScoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      providers: [QuestionScoreService, UrlService, HttpClient]
    }).compileComponents();
  });
  // checking if component is created
  it('should be created', inject(
    [QuestionScoreService],
    (service: QuestionScoreService) => {
      expect(service).toBeTruthy();
    }
  ));

  /**
   * See if postQuestionScore makes an http post request.
   *
   * Function tested: postQuestionScore()
   **/
  it('postQuestionScore should call HttpClient.post, and post.calls.count() will be 1', () => {
    let questionscoreSpy: { post: jasmine.Spy };
    questionscoreSpy = jasmine.createSpyObj('HttpClient', ['post']);
    questionscoreService = new QuestionScoreService(
      <any>questionscoreSpy,
      new UrlService()
    );

    //sending the data 'Test' but the function doesn't return anything
    //as the function just does an post call we are mocking the call
    questionscoreSpy.post.and.returnValue(asyncData('Test'));
    questionscoreService.postQuestionScore(QUESTIONSCORE[0]);

    expect(questionscoreSpy.post.calls.count()).toBe(1, 'one call');
  });
  /**
   * Test error responses.
   *
   * Function tested: None, just check if it gets an 404 status code error.
   **/
  const errorResponse = new HttpErrorResponse({
    error: 'test 404 error',
    status: 404,
    statusText: 'Not Found'
  });
});
