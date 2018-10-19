import { TestBed } from "@angular/core/testing";
import { BucketsService } from "./buckets.service";
import { UrlService } from "../urls/url.service";
import { HttpClientModule } from "@angular/common/http";

describe('BucketsService', () => {
  let service: BucketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports: [
        HttpClientModule,
      ],
      providers: [
        BucketsService,
        UrlService,
      ]});
  });

  it('should set a bucket', () => {
    let service = TestBed.get(BucketsService);

    let bucket = {
      bucketId: 0,
      bucketDescription: 'description',
      isActive: true
    };

    service.setBucket(bucket);
    expect(service.currentBucket).toEqual(bucket);
  });

  it('should get the current bucket', () => {
    let service = TestBed.get(BucketsService);
    
    let bucket = {
      bucketId: 0,
      bucketDescription: 'description',
      isActive: true
    };
    
    service.setBucket(bucket);
    let currentBucket = service.getCurrentBucket();
    expect(currentBucket).toEqual(bucket);
  });

  it('should set the current bucket\'s description', () => {
    let service = TestBed.get(BucketsService);

    let bucket = {
      bucketId: 0,
      bucketDescription: 'description',
      isActive: true
    };

    service.setBucket(bucket);
    let description = 'new description';
    service.setDescription(description);
    expect(service.currentBucket.bucketDescription).toEqual(description);
  });

  it('should get the current bucket\'s description', () => {
    let service = TestBed.get(BucketsService);

    let bucket = {
      bucketId: 0,
      bucketDescription: 'description',
      isActive: true
    };

    service.setBucket(bucket);
    let description = service.getDescription();
    expect(description).toEqual(bucket.bucketDescription);
  });

});
