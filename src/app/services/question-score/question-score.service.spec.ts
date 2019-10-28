import { TestBed, inject } from '@angular/core/testing';

import { QuestionScoreService } from './question-score.service';
import { Dependencies } from '../../screenforce.test.module';

describe('QuestionScoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(Dependencies);
  });

  it('should be created', inject([QuestionScoreService], (service: QuestionScoreService) => {
    expect(service).toBeTruthy();
  }));
});
