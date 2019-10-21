import { TestBed, inject } from '@angular/core/testing';

import { SimpleTraineeService } from './simple-trainee.service';
import { Dependencies } from 'src/app/caliber.test.module';

describe('SimpleTraineeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(Dependencies);
  });

  it('should be created', inject([SimpleTraineeService], (service: SimpleTraineeService) => {
    expect(service).toBeTruthy();
  }));
});
