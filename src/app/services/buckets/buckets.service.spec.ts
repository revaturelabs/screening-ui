import { TestBed, inject } from '@angular/core/testing';

import { BucketsService } from './buckets.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UrlService } from '../urls/url.service';

describe('BucketsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BucketsService, HttpClient, HttpHandler, UrlService]
    });
  });

  it('should be created', inject([BucketsService], (service: BucketsService) => {
    expect(service).toBeTruthy();
  }));
});
