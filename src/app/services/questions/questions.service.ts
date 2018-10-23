import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Question } from '../../entities/Question';
import { UrlService } from '../urls/url.service';
import { SkillTypeBucketLookUp } from '../../entities/SkillTypeBucketLookup';
import { Bucket } from '../../entities/Bucket';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

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
  updateQuestion(question: Question): Observable<Question> {
    return this.http.put<Question>(this.urlService.question.putQuestion(question.questionId), question, httpOptions).pipe(
        catchError(err=>{return this.handleError(err,question)})
      );
  }

  deleteQuestion(questionId: number) {
    return this.http.delete(this.urlService.question.deleteQuestion(questionId));
  }

  /**
   * deactivates question
   * add urlService to get endpoint for deactivating a question
   * @param questionId
  */
  deactivateQuestion(questionId: number): Observable<Object> {
    return this.http.put(this.urlService.question.deactivateQuestion(questionId), httpOptions)
      .pipe(
        catchError(err=>{return this.handleError(err,questionId)})
    );
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
  getBucketQuestions(bucketId: number): Observable<Question[]>{
    return this.http.get<Question[]>(this.urlService.question.getQuestionsByBucketId(bucketId));
  }

  getQuestions(skillTypeId: number): Observable<Question[]> {
    console.log("calling get Questions");
    // const tagArray: number[] = [];
    // for (const tag of this.tagService.getCheckedTags()){
    //   tagArray.push(tag.tagId);
    // }
    const currSkillTypeID = skillTypeId;
    // const tagsAndSkill: TagsAndSkill = { tagList : tagArray, skillTypeId : currSkillTypeID };

    return this.http.post<Question[]>( // change to get with parameters
      this.urlService.question.filteredQuestions(),
      currSkillTypeID
    );
  }


   // getQuestions(bucketId: number): Observable<Question[]> {
   //
   //
   // }
  /**
   * Originally from a file called "questionsToBuckets.util.ts"
   * That was a gross way to do it, so I incorporated the only method in it
   * here.
   * @param allQuestions
   * @param allBuckets
   */
  saveQuestions(allQuestions: Question[], allBuckets: SkillTypeBucketLookUp): Bucket[] {
    allQuestions.forEach(question => {
      // If the buckets array is empty, add this question's bucket to it
      if (this.returnBuckets.length === 0) {
        const matchingBucket = allBuckets.buckets.find(function (element) {
          return element.bucketId === question.bucket.bucketId;
        });
        // After adding the new bucket, add the current question to the new bucket
        if (matchingBucket) {
          this.returnBuckets.push(matchingBucket);
          // this.returnBuckets[this.returnBuckets.length - 1].questions = [];
          // this.returnBuckets[this.returnBuckets.length - 1].questions.push(question);
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
            // this.returnBuckets[this.returnBuckets.length - 1].questions = [];
            // this.returnBuckets[this.returnBuckets.length - 1].questions.push(question);
          }
          // If the bucket exists, add question to it
        } else {
          // this.returnBuckets[this.returnBuckets.indexOf(existingBucket)].questions.push(question);
        }
      }

    });
    return this.returnBuckets;
  }

  private handleError(error: HttpErrorResponse, cause: any) {
    return throwError(error);
  };

}
