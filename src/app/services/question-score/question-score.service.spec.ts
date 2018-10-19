import { TestBed, inject } from '@angular/core/testing';

import { QuestionScoreService } from './question-score.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UrlService } from '../urls/url.service';

describe('QuestionScoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionScoreService, HttpClient, HttpHandler, UrlService]
    });
  });

  it('QuestionScoreService should be created', inject([QuestionScoreService], (service: QuestionScoreService) => {
    expect(service).toBeTruthy();
  }));
});
