import { TestBed, inject } from '@angular/core/testing';

import { ScreenerBucketsService } from './screener-buckets.service';

describe('ScreenerBucketsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScreenerBucketsService]
    });
  });

  it('should be created', inject([ScreenerBucketsService], (service: ScreenerBucketsService) => {
    expect(service).toBeTruthy();
  }));
});
