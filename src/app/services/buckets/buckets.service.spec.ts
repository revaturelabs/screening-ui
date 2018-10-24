import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { BucketsService } from "./buckets.service";
import { UrlService } from "../urls/url.service";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Bucket } from "src/app/entities/Bucket";



describe('BucketsService', () => {
  let service: BucketsService;
  let bucket: Bucket;
  let httpTestingController: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BucketsService, HttpClient, HttpHandler, UrlService]
    });
    TestBed.configureTestingModule({ 
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        BucketsService,
        UrlService,
      ]});

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

  /**
  * Test that a request to the url was made, that the correct request method was made,
  * and that the response equals our mock data. 
  *
  * Function tested: getAllBuckets()
  */
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

  /**
  * Test that a request to the url was made, that the correct request method was made,
  * and that the response equals our mock data.
  *
  * Function tested: getBucketById(bucketId: number)
  */
  it('should get a bucket by id', () => {
    service.getBucketById(0).subscribe(data => expect(data).toEqual(bucket));
    const req = httpTestingController.expectOne('http://ec2-54-210-14-237.compute-1.amazonaws.com:8181/bucket/0');
    expect(req.request.method).toEqual('GET');
    req.flush(bucket);
  });

  /**
  * Test that a request to the url was made, that the correct request method was made,
  * and that the response equals our mock data.
  *
  * Function tested: updateBucket (bucket: Bucket)
  */
  it('should update a bucket', () => {
    service.updateBucket(bucket).subscribe(data => expect(data).toEqual(bucket));
    const req = httpTestingController.expectOne('http://ec2-54-210-14-237.compute-1.amazonaws.com:8181/bucket/' + bucket.bucketId);
    expect(req.request.method).toEqual('PUT');
    req.flush(bucket);
  });

  /**
  * Test that a request to the url was made, that the correct request method was made,
  * and that the response equals our mock data.
  *
  * Function tested: createNewBucket(bucket: Bucket)
  */
  it('should create a new bucket', () => {
    service.createNewBucket(bucket).subscribe(data => expect(data).toEqual(bucket));
    const req = httpTestingController.expectOne('http://ec2-54-210-14-237.compute-1.amazonaws.com:8181/bucket');
    expect(req.request.method).toEqual('POST');
    req.flush(bucket);
  });

  /**
  * Test that a request to the url was made, that the correct request method was made,
  * and that the response equals our mock data.
  *
  * Function tested: deleteBucket(bucketId: number)
  */
 it('should delete a bucket', () => {
  service.deleteBucket(bucket.bucketId).subscribe(data => expect(data).toEqual(bucket));
  const req = httpTestingController.expectOne('http://ec2-54-210-14-237.compute-1.amazonaws.com:8181/bucket/' + bucket.bucketId);
  expect(req.request.method).toEqual('DELETE');
  req.flush(bucket);
});

  /**
  * Test that the current bucket is assigned a value after setBucket() is called.
  *
  * Function tested: setBucket(bucket: Bucket)
  */
  it('should set a bucket', () => {
    let service = TestBed.get(BucketsService);
    service.setBucket(bucket);
    expect(service.currentBucket).toEqual(bucket);
  });

  /**
  * Test that getCurrentBucket() retrieves the current bucket
  * if the current bucket isn't null and that an undefined value
  * is returned if the the current bucket is null.
  *
  * Function tested: getCurrentBucket()
  */
  it('should get the current bucket', () => {
    service.setBucket(bucket);
    let currentBucket = service.getCurrentBucket();
    expect(currentBucket).toEqual(bucket);
    service.setBucket(null);
    let testNullBucketArg = service.getCurrentBucket();
    expect(testNullBucketArg).toBe(undefined);
  });

  /**
  * Test that the current bucket's description is set after setDescription is called.
  *
  * Function tested: setDescription(desc: string)
  */
  it('should set the current bucket\'s description', () => {
    let service = TestBed.get(BucketsService);
    service.setBucket(bucket);
    let description = 'new description';
    service.setDescription(description);
    expect(service.currentBucket.bucketDescription).toEqual(description);
  });

  /**
  * Test that the current bucket's description is returned
  * after getDescription is called.
  *
  * Function tested: getDescription()
  */
  it('should get the current bucket\'s description', () => {
    service.setBucket(bucket);
    let description = service.getDescription();
    expect(description).toEqual(bucket.bucketDescription);
  });

});
