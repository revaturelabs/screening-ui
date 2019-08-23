import {BucketsService} from './buckets.service';
import { Bucket } from 'src/app/entities/Bucket';
import { defer } from 'rxjs';
import { UrlService } from '../urls/url.service';
import { inject } from '@angular/core/testing';

export function asyncData<T>(data: T) {
    return defer(() => Promise.resolve(data));
  }
  
  export function asyncError<T>(errorObject: any) {
    return defer(() => Promise.reject(errorObject));
  }
  let mockbucket:Bucket={
    bucketId: 1,
    bucketDescription:"Hi",
    isActive:true
}
let buckets:Bucket[] =[mockbucket];

describe('BucketsService', () =>{ 
    const testBucket = -1;
    let httpClientSpyOnGet: { get: jasmine.Spy };
    let httpClientSpyOnPut: { put: jasmine.Spy };
    let httpClientSpyOnPost: { post: jasmine.Spy };
    let bucketsService: BucketsService;
// testing getAllBuckets makes http request
    it('getAllBuckets should return expected buckets', () => {
        httpClientSpyOnGet = jasmine.createSpyObj('http', ['get']);
        bucketsService = new BucketsService(<any> httpClientSpyOnGet, new UrlService);

        const expectedBuckets: Bucket[] =[mockbucket];

        httpClientSpyOnGet.get.and.returnValue(asyncData(expectedBuckets));

        bucketsService.getAllBuckets().subscribe(
            buckets => expect(buckets).toEqual(expectedBuckets, 'expected buckets'), 
            fail
        );
        expect(httpClientSpyOnGet.get.calls.count()).toBe(1, 'one call');
    });
    // testing if function is making an http request
    it('getBucketById should return a bucket', () => {
        httpClientSpyOnGet = jasmine.createSpyObj('http',['get']);
        bucketsService =  new BucketsService(<any> httpClientSpyOnGet, new UrlService);
        
        httpClientSpyOnGet.get.and.returnValue(asyncData(buckets));
        bucketsService.getBucketById(buckets[0].bucketId).subscribe(
            buckets => expect(buckets[0]).toEqual(buckets[0], 'expected bucket'), fail
        );
        expect(httpClientSpyOnGet.get.calls.count()).toBe(1, 'one call');

    })
// testing CreateNewbucket makes an Http Request
    it('createNewBucket should return new Bucket', () => {
        httpClientSpyOnPost = jasmine.createSpyObj('http', ['post']);
        bucketsService = new BucketsService(<any> httpClientSpyOnPost, new UrlService);

        httpClientSpyOnPost.post.and.returnValue(asyncData(Bucket[0]));
        bucketsService.createNewBucket(Bucket[0]).subscribe(
            buckets => expect(buckets).toEqual(Bucket[0]), fail
        );
        expect(httpClientSpyOnPost.post.calls.count()).toBe(1,'one call');
    });

    it('updateBucket should return bucket with updated values', () => {
        httpClientSpyOnPut = jasmine.createSpyObj('http', ['put']);
        bucketsService = new BucketsService(<any> httpClientSpyOnPut, new UrlService);

        httpClientSpyOnPut.put.and.returnValue(asyncData(mockbucket));
        bucketsService.updateBucket(mockbucket).subscribe(
            buckets => expect(buckets).toEqual(mockbucket), fail
        );
        expect(httpClientSpyOnPut.put.calls.count()).toBe(1, 'one call');
    });



    })









