import { TestBed, inject } from '@angular/core/testing';

import { BucketsService } from './buckets.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UrlService } from '../urls/url.service';



describe('BucketsService', () => {
  let httpClientSpyOnGet: {get: jasmine.Spy};
  let bucketService: BucketsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BucketsService, HttpClient, HttpHandler, UrlService]
    });
  });

  // it('should be created', inject([BucketsService], (service: BucketsService) => {
  //   expect(service).toBeTruthy();
  // }));

  it('should create an instance', () =>{
    let http: HttpClient;
    bucketService = new BucketsService(http,new UrlService);
    expect(bucketService).toBeTruthy();
  });

  it('getAllBuckets should get all buckets', () => {
    httpClientSpyOnGet = jasmine.createSpyObj('http',['get']);
    bucketService = new BucketsService(<any> httpClientSpyOnGet, new UrlService);
  });
});
