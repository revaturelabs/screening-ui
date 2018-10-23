import { TestBed, inject } from '@angular/core/testing';

import { QuestionScoreService } from './question-score.service';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../urls/url.service';

describe('QuestionScoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionScoreService]
    });
  });

  // it('should be created', inject([QuestionScoreService], (service: QuestionScoreService) => {
  //   expect(service).toBeTruthy();
  // }));

  it('should create an instance', () => {
    let http: HttpClient;
    const service= new QuestionScoreService(http, new UrlService);
    expect(service).toBeTruthy();
  })
});
