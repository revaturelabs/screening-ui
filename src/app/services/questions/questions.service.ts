import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Question } from '../../entities/Question';
import { UrlService } from '../urls/url.service';
import { SkillTypeCategoryLookUp } from '../../entities/SkillTypeCategoryLookup';
import { Category } from '../../entities/Category';
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
  private returnCategories: Category[] = [];

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
   * @param categoryId
  */

  getCategoryQuestions(categoryId: number): Observable<Question[]> {
    return this.http.get<Question[]>(this.urlService.question.getQuestionsByCategoryId(categoryId));
  }

  getQuestions(skillTypeId: number): Observable<Question[]> {
    const currSkillTypeID = skillTypeId;

    return this.http.post<Question[]>( // change to get with parameters
      this.urlService.question.filteredQuestions(),
      currSkillTypeID
    );
  }

  /**
   * Originally from a file called "questionsToBuckets.util.ts"
   * That was a gross way to do it, so I incorporated the only method in it
   * here.
   * @param allQuestions
   * @param allCategories
   */
  saveQuestions(allQuestions: Question[], allCategories: SkillTypeCategoryLookUp): Category[] {
    allQuestions.forEach(question => {
      // If the buckets array is empty, add this question's bucket to it
      if (this.returnCategories.length === 0) {
        const matchingCategory = allCategories.categories.find(function (element) {
          return element.categoryId === question.category.categoryId;
        });
        // After adding the new bucket, add the current question to the new bucket
        if (matchingCategory) {
          this.returnCategories.push(matchingCategory);
        }
        // If the bucket array is not empty, check to see if this question's bucket is already listed
      } else {
        const existingCategory = this.returnCategories.find(function (element) {
          return element.categoryId === question.category.categoryId;
        });
        // If this question's bucket is not listed, add it
        if (!existingCategory) {
          const matchingCategory = allCategories.categories.find(function (element) {
            return element.categoryId === question.category.categoryId;
          });
          // After adding the new bucket, add the current question to the new bucket
          if (matchingCategory) {
            this.returnCategories.push(matchingCategory);
          }
          // If the bucket exists, add question to it
        }
      }

    });
    return this.returnCategories;
  }


}
