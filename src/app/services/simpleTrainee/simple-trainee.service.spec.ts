import { TestBed, inject } from '@angular/core/testing';

import { SimpleTraineeService } from './simple-trainee.service';

describe('SimpleTraineeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimpleTraineeService]
    });
  });

  it('should be created', inject([SimpleTraineeService], (service: SimpleTraineeService) => {
    expect(service).toBeTruthy();
  }));
});
