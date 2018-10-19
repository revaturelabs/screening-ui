
// Entities
import { Question } from '../../entities/Question';

// Services
import { QuestionsService } from './questions.service';

// Modules
import { HttpErrorResponse } from '@angular/common/http';
import { QUESTIONS, expectedQuestion } from '../../mock-data/mock-questions';

import { defer } from 'rxjs';
import { UrlService } from '../urls/url.service';
import { SimpleTraineeService } from '../simpleTrainee/simple-trainee.service';

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

export function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}

/**
 * Test for methods on the question service.
 *
 * @author Antonio Marrero Bonilla | 1803-USF-MAR26 | Wezley Singleton
 *
 * @author Byron Hall | 1803-USF-MAR26 | Wezley Singleton
 */

/**
 * This describe block is actually using mock data. It uses the same approach as this example:
 * https://angular.io/guide/testing#testing-http-services
 */
describe('QuestionsService ', () => {
  const testBucket = -1;
  let httpClientSpyOnGet: { get: jasmine.Spy };
  let httpClientSpyOnPost: { post: jasmine.Spy };
  let httpClientSpyOnPut: {put: jasmine.Spy };
  let questionsService: QuestionsService;

  /**
   * See if getBucketQuestions makes an http request
   *
   * Function tested: getBucketQuestions()
   */
  it('getBucketQuestions should return expected questions from bucket #' + testBucket + ' (HttpClient called once)', () => {
    httpClientSpyOnGet = jasmine.createSpyObj('http', ['get']);
    questionsService = new QuestionsService(<any> httpClientSpyOnGet, new UrlService );

    const expectedQuestions: Question[] = [expectedQuestion];

    httpClientSpyOnGet.get.and.returnValue(asyncData(expectedQuestions));

    questionsService.getBucketQuestions(testBucket).subscribe(
      questions => expect(questions).toEqual(expectedQuestions, 'expected questions'),
      fail
    );

    expect(httpClientSpyOnGet.get.calls.count()).toBe(1, 'one call');
  });

  /**
   * See if createNewQuestion makes an http request.
   *
   * Function tested: createNewQuestion()
   **/
  it('createNewQuestion should call HttpClient.post, and return the new question', () => {
    httpClientSpyOnPost = jasmine.createSpyObj('http', ['post']);
    questionsService = new QuestionsService(<any> httpClientSpyOnPost, new UrlService);

    httpClientSpyOnPost.post.and.returnValue(asyncData(QUESTIONS[0]));

    questionsService.createNewQuestion(QUESTIONS[0]).subscribe(
      questions => expect(questions).toEqual(QUESTIONS[0]),
      fail
    );

    expect(httpClientSpyOnPost.post.calls.count()).toBe(1, 'one call');
  });

  /**
   * See if updateQuestion makes an http request.
   *
   * Function tested: updatedQuestion()
   **/
  it('updateQuestion should call HttpClient.put, and return the altered question', () => {
    httpClientSpyOnPut = jasmine.createSpyObj('http', ['put']);
    questionsService = new QuestionsService(<any> httpClientSpyOnPut, new UrlService);

    httpClientSpyOnPut.put.and.returnValue(asyncData(QUESTIONS[0]));

    questionsService.updateQuestion(QUESTIONS[0]).subscribe(
      questions => expect(questions).toEqual(QUESTIONS[0]),
      fail
    );

    expect(httpClientSpyOnPut.put.calls.count()).toBe(1, 'one call');
  });

  /**
   * See if updateQuestion makes an http request.
   *
   * Function tested: activateQuestion()
   **/
  it('activateQuestion should call HttpClient.put, and return the activated question', () => {
    httpClientSpyOnPut = jasmine.createSpyObj('http', ['put']);
    questionsService = new QuestionsService(<any> httpClientSpyOnPut, new UrlService);

    httpClientSpyOnPut.put.and.returnValue(asyncData(QUESTIONS[0]));

    questionsService.activateQuestion(1).subscribe(
      questions => expect(questions).toEqual(QUESTIONS[0]),
      fail
    );

    expect(httpClientSpyOnPut.put.calls.count()).toBe(1, 'one call');
  });

  /**
   * See if deactivateQuestion makes an http request.
   *
   * Function tested: deactivateQuestion()
   */
  it('deactivateQuestion should call HttpClient.put, and return the activated question', () => {
    httpClientSpyOnPut = jasmine.createSpyObj('http', ['put']);
    questionsService = new QuestionsService(<any> httpClientSpyOnPut, new UrlService);

    httpClientSpyOnPut.put.and.returnValue(asyncData(QUESTIONS[0]));

    questionsService.deactivateQuestion(1).subscribe(
      questions => expect(questions).toEqual(QUESTIONS[0]),
      fail
    );

    expect(httpClientSpyOnPut.put.calls.count()).toBe(1, 'one call');
  });

  /**
   * Test error responses.
   *
   * Function tested: None, just check if it gets an 404 status code error.
   **/
  const errorResponse = new HttpErrorResponse({
    error: 'test 404 error',
    status: 404, statusText: 'Not Found'
  });

  /**
   * Test if getBucketQuestions returns an error 404 as a return value.
   *
   * Function tested: getBucketQuestions()
   */
  it('getBucketQuestions should return an error when the server returns a 404', () => {
    httpClientSpyOnGet = jasmine.createSpyObj('http', ['get']);
    questionsService = new QuestionsService(<any> httpClientSpyOnGet, new UrlService);

    httpClientSpyOnGet.get.and.returnValue(asyncError(errorResponse));

    questionsService.getBucketQuestions(testBucket).subscribe(
      questions => fail('expected an error, not questions'),
      error  => expect(error.message).toContain('404')
    );
  });

  /**
   * Check if createNewQuestion return an error when server gives an 404 status code.
   *
   * Function tested: createNewQuestion()
   */
  it('createNewQuestion should return an error when the server returns a 404', () => {
    httpClientSpyOnPost = jasmine.createSpyObj('http',['post']);
    questionsService = new QuestionsService(<any> httpClientSpyOnPost, new UrlService);

    httpClientSpyOnPost.post.and.returnValue(asyncError(errorResponse));

    questionsService.createNewQuestion(QUESTIONS[0]).subscribe(
      questions => fail('expected an error, not questions'),
      error  => expect(error.message).toContain('404')
    );
  });

  /**
   * Check if updateQuestion returns error when gets an 404 status code.
   *
   * Function tested: updateQuestion()
   */
  it('updateQuestion should return an error when the server returns a 404', () => {
    httpClientSpyOnPut = jasmine.createSpyObj('http',['put']);
    questionsService = new QuestionsService(<any> httpClientSpyOnPut, new UrlService);

    httpClientSpyOnPut.put.and.returnValue(asyncError(errorResponse));

    questionsService.updateQuestion(QUESTIONS[0]).subscribe(
      questions => fail('expected an error, not questions'),
      error  => {expect(error.message).toContain('404')}
    );
  });

  /**
   * Check if activateQuestion returns an error when gets an 404 status code.
   *
   * Function tested: activateQuestion()
   */
  it('activateQuestion should return an error when the server returns a 404', () => {
    httpClientSpyOnPut = jasmine.createSpyObj('http',['put']);
    questionsService = new QuestionsService(<any> httpClientSpyOnPut, new UrlService);

    httpClientSpyOnPut.put.and.returnValue(asyncError(errorResponse));

    questionsService.activateQuestion(1).subscribe(
      questions => fail('expected an error, not questions'),
      error  => expect(error.message).toContain('404')
    );
  });

  /**
   * Check if deactivateQuestion returns an error when gets an status code 404.
   *
   * Function tested: deactivateQuestion()
   */
  it('deactivateQuestion should return an error when the server returns a 404', () => {
    httpClientSpyOnPut = jasmine.createSpyObj('http',['put']);
    questionsService = new QuestionsService(<any> httpClientSpyOnPut, new UrlService);

    httpClientSpyOnPut.put.and.returnValue(asyncError(errorResponse));

    questionsService.deactivateQuestion(1).subscribe(
      questions => fail('expected an error, not questions'),
      error  => expect(error.message).toContain('404')
    );
  });
});
