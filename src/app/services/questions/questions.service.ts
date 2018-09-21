import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Question } from '../../entities/Question';
import { UrlService } from '../../../../gambit-client/services/urls/url.service';

/**
  * Used url Service to input endpoints to our services
  * unified create and update question so that it sends the
  * same objects
  *
  * @author Alex Pich | 1803-USF-MAR26 | Wezley Singleton
  *
  * @author Danny S Chhun | 1803-USF-MAR26 | Wezley Singleton
  *
  * @author Michael Adedigba | 1803-USF-MAR26 | Wezley Singleton
  *
  * @author Pedro De Los Reyes | 1803-USF-MAR26 | Wezley Singleton
  */

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable()
export class QuestionsService {

  constructor(private http: HttpClient, private urlService: UrlService) { }

  questions: Question[];

  /**
   * Modifed parameters to only take in question and tagIds and not also bucket id because that is already
   * stored in question
   * updated to be in sync with new Gambit question service modifications
   * used urlService to get endpoint for posting new questions
   * @param question - question model
   * @param tagIds - array of tag ids
   */
  createNewQuestion(question: Question, tagIds: number[]) {
    return this.http.post(this.urlService.question.postQuestion(), { question: question, tagIds: tagIds }, httpOptions);
  }

  /**
   * Removed dead code
   * Removed buckedId parameter
   * updated to be in sync with new Gambit question service modifications
   * used urlService to get endpoint for updating new quetions with put method
   * @param question
   * @param newTagIds
   */
  updateQuestion(question: Question, newTagIds: number[]) {
    return this.http.put(this.urlService.question.putQuestion(), { question: question, tagIds: newTagIds }, httpOptions);
  }

  /**
   * deactivates question
   * add urlService to get endpoint for deactivating a question
   * @param questionId
  */
  deactivateQuestion(questionId: number) {
    return this.http.put(this.urlService.question.deactivateQuestion(questionId), httpOptions);
  }

  /**
   * activates question
   * add urlService to get endpoint for activating a question
   * @param questionId
  */
  activateQuestion(questionId: number) {
    return this.http.put(this.urlService.question.activateQuestion(questionId), httpOptions);
  }

  /**
   * gets all questions from bucket
   * add urlService to get endpoint for getting Bucket Questions
   * @param buckerId
  */
  getBucketQuestions(bucketId: number) {
    return this.http.get(this.urlService.question.getQuestionsByBucketId(bucketId));
  }
}
