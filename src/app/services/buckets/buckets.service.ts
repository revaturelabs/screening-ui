import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';

import { Bucket } from '../../entities/Bucket';
import { UrlService } from '../urls/url.service';
import { BUCKETS } from 'src/app/mock-data/mock-buckets';

/**
   * Imported urlservice to replace hardcoded endpoints
   *
   * @author Alex Pich | 1803-USF-MAR26 | Wezley Singleton
   *
   * @author Danny S Chhun | 1803-USF-MAR26 | Wezley Singleton
   *
   * @author Michael Adedigba | 1803-USF-MAR26 | Wezley Singleton
   *
   * @author Pedro De Los Reyes | 1803-USF-MAR26 | Wezley Singleton
   */

const httpOptions = {
    headers: new HttpHeaders({
            'Content-Type':  'application/json',
        })
    };

@Injectable()
export class BucketsService {

  /** Making an Observable */
  bucketSubject = new Subject();

  private currentBucket: Bucket;

  constructor(
    private http: HttpClient,
    private urlService: UrlService,
    ) {}

  getAllBuckets(): Observable<Bucket[]> {
      return this.http.get<Bucket[]>(this.urlService.bucket.getAllBuckets());
  }

  getBucketById(bucketId: number) {
      return this.http.get<Bucket>(this.urlService.bucket.getBucketById(bucketId));
  }

  updateBucket (bucket: Bucket) {
    return this.http.put<Bucket>(this.urlService.bucket.updateBucket(), bucket, httpOptions);
  }

  createNewBucket(bucket: Bucket): Observable<Bucket> {
      return this.http.post<Bucket>(this.urlService.bucket.createNewBucket(), bucket, httpOptions);
  }
//   deleteBucket(bucket: Bucket) {
//       return this.http.delete<Bucket>(this.urlService.bucket.deleteBucket(), bucket, httpOptions);
//   }

  deleteBucket(bucket: Bucket) {
    BUCKETS.forEach(function(item, index, object) {
        console.log('before the currentbucket ' + item.bucketId + ' here ' + bucket.bucketId);
        if (item.bucketId === bucket.bucketId) {
            console.log('After the current bucket');
          object.splice(index, 1);
        }
      });
      console.log(BUCKETS);
  }

  setBucket(bucket: Bucket) {
     this.currentBucket = bucket;
  }

  getCurrentBucket(): Bucket {
     if (this.currentBucket != null) {
         return this.currentBucket;
     }
  }

  setName(name: string) {
      this.currentBucket.bucketDescription = name;
  }

  getName(id: number) {
      return this.currentBucket.bucketDescription;
  }

  setDescription(desc: string) {
      this.currentBucket.bucketDescription = desc;
  }

  getDescription() {
      return this.currentBucket.bucketDescription;
  }

}
