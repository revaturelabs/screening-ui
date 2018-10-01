import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

// Entities
import { Question } from '../../entities/Question';

// Services
import { SimpleTraineeService } from '../simpleTrainee/simple-trainee.service';
import { UrlService } from '../urls/url.service';
/*
Provides an observable of Questions through the getQuestions() method.
*/
@Injectable()
export class QuestionService {

  constructor(
    private httpClient: HttpClient,
    // private tagService: TagService,
    private simpleTraineeService: SimpleTraineeService,
    private urlService: UrlService
  ) {}

  headers = new HttpHeaders({
    'Content-type': 'application/json'
  });


  // Returns an observable array of questions, filtered by the selected tags and
  // candidate's skillTypeID
  getQuestions(): Observable<Question[]> {
    // const tagArray: number[] = [];
    // for (const tag of this.tagService.getCheckedTags()){
    //   tagArray.push(tag.tagId);
    // }
    const currSkillTypeID = this.simpleTraineeService.getSelectedCandidate().skillTypeID;
    // const tagsAndSkill: TagsAndSkill = { tagList : tagArray, skillTypeId : currSkillTypeID };

    return this.httpClient.post<Question[]>( //change to get with parameters
      this.urlService.question.filteredQuestions(),
       currSkillTypeID
    );
  }
}
