import { TestBed, inject } from '@angular/core/testing';

import { QuestionScoreService } from './question-score.service';
import { UrlService } from '../../services/urls/url.service';
import { RouterTestingModule } from '@angular/router/testing'; 

describe('QuestionScoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [QuestionScoreService, UrlService]
    });
  });

  it('should be created', inject([QuestionScoreService], (service: QuestionScoreService) => {
    expect(service).toBeTruthy();
  }));
});
