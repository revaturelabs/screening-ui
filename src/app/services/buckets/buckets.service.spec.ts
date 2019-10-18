import { TestBed, inject } from '@angular/core/testing';

import { BucketsService } from './buckets.service';
import { Dependencies } from 'src/app/caliber.test.module';

describe('BucketsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(Dependencies);
  });

  it('should be created', inject([BucketsService], (service: BucketsService) => {
    expect(service).toBeTruthy();
  }));
});
