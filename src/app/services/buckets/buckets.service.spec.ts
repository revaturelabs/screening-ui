import { TestBed } from "@angular/core/testing";
import { BucketsService } from "./buckets.service";
import { UrlService } from "../urls/url.service";
<<<<<<< HEAD
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Bucket } from "src/app/entities/Bucket";

describe('BucketsService', () => {
  let service: BucketsService;
  let bucket: Bucket;
  let httpTestingController: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports: [
        HttpClientTestingModule,
=======
import { HttpClientModule } from "@angular/common/http";

describe('BucketsService', () => {
  let service: BucketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports: [
        HttpClientModule,
>>>>>>> 31172cc85e796679c0c2a66ef32ae85ba4bf6bee
      ],
      providers: [
        BucketsService,
        UrlService,
      ]});
<<<<<<< HEAD

    service = TestBed.get(BucketsService);
    bucket = { 
      bucketId: 0,         
      bucketDescription: 'description',
      isActive: true 
    };
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should get buckets', () => {
    let buckets: Bucket[] = [
      {
        bucketId: 0,
        bucketDescription: 'description',
        isActive: true
      },
      {
        bucketId: 1,
        bucketDescription: 'description',
        isActive: true
      },
      {
        bucketId: 2,
        bucketDescription: 'description',
        isActive: true
      }
    ];
  
    service.getAllBuckets().subscribe(data => expect(data).toEqual(buckets));
    const req = httpTestingController.expectOne('http://ec2-54-210-14-237.compute-1.amazonaws.com:8181/bucket');
    expect(req.request.method).toEqual('GET');
    req.flush(buckets);
  });

  it('should get a bucket by id', () => {
    service.getBucketById(0).subscribe(data => expect(data).toEqual(bucket));
    const req = httpTestingController.expectOne('http://ec2-54-210-14-237.compute-1.amazonaws.com:8181/bucket/0');
    expect(req.request.method).toEqual('GET');
    req.flush(bucket);
  });

  it('should update a bucket', () => {
    service.updateBucket(bucket).subscribe(data => expect(data).toEqual(bucket));
    const req = httpTestingController.expectOne('http://ec2-54-210-14-237.compute-1.amazonaws.com:8181/bucket/update');
    expect(req.request.method).toEqual('PUT');
    req.flush(bucket);
  });

  it('should create a new bucket', () => {
    service.createNewBucket(bucket).subscribe(data => expect(data).toEqual(bucket));
    const req = httpTestingController.expectOne('http://ec2-54-210-14-237.compute-1.amazonaws.com:8181/bucket');
    expect(req.request.method).toEqual('POST');
    req.flush(bucket);
=======
>>>>>>> 31172cc85e796679c0c2a66ef32ae85ba4bf6bee
  });

  it('should set a bucket', () => {
    let service = TestBed.get(BucketsService);
<<<<<<< HEAD
=======

    let bucket = {
      bucketId: 0,
      bucketDescription: 'description',
      isActive: true
    };

>>>>>>> 31172cc85e796679c0c2a66ef32ae85ba4bf6bee
    service.setBucket(bucket);
    expect(service.currentBucket).toEqual(bucket);
  });

  it('should get the current bucket', () => {
<<<<<<< HEAD
=======
    let service = TestBed.get(BucketsService);
    
    let bucket = {
      bucketId: 0,
      bucketDescription: 'description',
      isActive: true
    };
    
>>>>>>> 31172cc85e796679c0c2a66ef32ae85ba4bf6bee
    service.setBucket(bucket);
    let currentBucket = service.getCurrentBucket();
    expect(currentBucket).toEqual(bucket);
  });

  it('should set the current bucket\'s description', () => {
    let service = TestBed.get(BucketsService);
<<<<<<< HEAD
=======

    let bucket = {
      bucketId: 0,
      bucketDescription: 'description',
      isActive: true
    };

>>>>>>> 31172cc85e796679c0c2a66ef32ae85ba4bf6bee
    service.setBucket(bucket);
    let description = 'new description';
    service.setDescription(description);
    expect(service.currentBucket.bucketDescription).toEqual(description);
  });

  it('should get the current bucket\'s description', () => {
<<<<<<< HEAD
=======
    let service = TestBed.get(BucketsService);

    let bucket = {
      bucketId: 0,
      bucketDescription: 'description',
      isActive: true
    };

>>>>>>> 31172cc85e796679c0c2a66ef32ae85ba4bf6bee
    service.setBucket(bucket);
    let description = service.getDescription();
    expect(description).toEqual(bucket.bucketDescription);
  });

});
