import { TestBed, inject } from '@angular/core/testing';

import { BucketsService } from './buckets.service';
import { HttpClientModule } from '@angular/common/http';
import { UrlService } from '../urls/url.service';

describe('BucketsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [
        BucketsService,
        UrlService,
      ]
    });
  });

  it('should be created', inject([BucketsService], (service: BucketsService) => {
    expect(service).toBeTruthy();
  }));
});
