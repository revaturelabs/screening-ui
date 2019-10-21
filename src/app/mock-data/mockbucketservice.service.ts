import { Injectable } from '@angular/core';
import { Bucket } from '../entities/Bucket';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlService } from '../services/urls/url.service';

const httpOptions = {
    headers: new HttpHeaders({
            'Content-Type':  'application/json',
        })
    };

const Buckets: Bucket = { 
    bucketId: 1,
    bucketDescription: 'Test',
    isActive: true
    
}
@Injectable()
export class MockBucketSrvice {

    
  /** Making an Observable */
  bucketSubject = new Subject();

  private currentBucket: Bucket =Buckets;

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

  deleteBucket(bucket: Bucket): Observable<any> {
    return this.http.delete(this.urlService.bucket.deleteBucket(bucket.bucketId));
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

