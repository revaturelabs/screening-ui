import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Question } from '../../entities/Question';
import { UrlService } from '../urls/url.service';
import { TrackBucketLookUp } from '../../entities/TrackBucketLookup';
import { Bucket } from '../../entities/Bucket';
import { Observable } from 'rxjs';

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

  constructor(
    private http: HttpClient,
    private urlService: UrlService,
  ) { }

  questions: Question[];

  private returnBuckets: Bucket[] = [];

  /**
   * Modifed parameters to only take in question and tagIds and not also bucket id because that is already
   * stored in question
   * updated to be in sync with new Gambit question service modifications
   * used urlService to get endpoint for posting new questions
   * @param question - question model
   * @param tagIds - array of tag ids
   */
  createNewQuestion(question: Question) {
    return this.http.post(this.urlService.question.postQuestion(), question, httpOptions);
  }

  /**
   * Removed dead code
   * Removed buckedId parameter
   * updated to be in sync with new Gambit question service modifications
   * used urlService to get endpoint for updating new quetions with put method
   * @param question
   * @param newTagIds
   */
  updateQuestion(question: Question) {
    return this.http.put(this.urlService.question.putQuestion(), question, httpOptions);
  }

  /**
   * deactivates question
   * add urlService to get endpoint for deactivating a question
   * @param questionId
  */
  deactivateQuestion(question: Question) {
    return this.http.put(this.urlService.question.deactivateQuestion(question.questionId), question, httpOptions);
  }

  /**
   * activates question
   * add urlService to get endpoint for activating a question
   * @param questionId
  */
  activateQuestion(question: Question) {
    return this.http.put(this.urlService.question.activateQuestion(question.questionId), question, httpOptions);
  }

  /**
   * gets all questions from bucket
   * add urlService to get endpoint for getting Bucket Questions
   * @param buckerId
  */
  getBucketQuestions(bucketId: number): Observable<Question[]> {
    return this.http.get<Question[]>(this.urlService.question.getQuestionsByBucketId(bucketId));
  }

  getQuestions(trackId: number): Observable<Question[]> {
    const currTrackID = trackId;

    return this.http.post<Question[]>( // change to get with parameters
      this.urlService.question.filteredQuestions(),
      currTrackID
    );
  }

  /**
   * Originally from a file called "questionsToBuckets.util.ts"
   * That was a gross way to do it, so I incorporated the only method in it
   * here.
   * @param allQuestions
   * @param allBuckets
   */

  saveQuestions(allQuestions: Question[], allBuckets: TrackBucketLookUp): Bucket[] {
    allQuestions.forEach(question => {
      // If the buckets array is empty, add this question's bucket to it
      if (this.returnBuckets.length === 0) {
        const matchingBucket = allBuckets.buckets.find(function (element) {
          return element.bucketId === question.bucket.bucketId;
        });
        // After adding the new bucket, add the current question to the new bucket
        if (matchingBucket) {
          this.returnBuckets.push(matchingBucket);
        }
        // If the bucket array is not empty, check to see if this question's bucket is already listed
      } else {
        const existingBucket = this.returnBuckets.find(function (element) {
          return element.bucketId === question.bucket.bucketId;
        });
        // If this question's bucket is not listed, add it
        if (!existingBucket) {
          const matchingBucket = allBuckets.buckets.find(function (element) {
            return element.bucketId === question.bucket.bucketId;
          });
          // After adding the new bucket, add the current question to the new bucket
          if (matchingBucket) {
            this.returnBuckets.push(matchingBucket);
          }
          // If the bucket exists, add question to it
        }
      }

    });
    return this.returnBuckets;
  }


}
