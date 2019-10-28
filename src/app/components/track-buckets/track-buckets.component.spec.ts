import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BucketsService } from '../../services/buckets/buckets.service';
import { TrackBucketsComponent } from './track-buckets.component';
import { FormsModule } from '@angular/forms';
import { AlertsService } from '../../services/alert-service/alerts.service';
import { Bucket } from '../../entities/Bucket';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { UrlService } from '../../services/urls/url.service';

describe('TrackBucketsComponent', () => {
let fixture:ComponentFixture<TrackBucketsComponent>;
let component:TrackBucketsComponent;
let fakeBucketService:BucketsService;
let mockbucket:Bucket={
  bucketId: 1,
  bucketDescription:"Hi",
  isActive:true
}
let bucket2: Bucket ={
  bucketId: 2,
  bucketDescription:"Hi",
  isActive:true

}
let fakeBukets:Bucket[]=[mockbucket];
beforeEach(()=>{
  TestBed.configureTestingModule({
    imports:[RouterTestingModule,FormsModule,HttpClientModule],
    declarations:[TrackBucketsComponent],
    providers:[BucketsService,AlertsService,UrlService]
  })
  fixture=TestBed.createComponent(TrackBucketsComponent);
  component=fixture.componentInstance;
  fakeBucketService=TestBed.get(BucketsService);
});
it(`Checking if all buckets were returned`,()=>{
   spyOn(fakeBucketService,`getAllBuckets`)
   .and.returnValues(of(fakeBukets));
  
});
  
  it('Checking if bucket is created', () => {
    spyOn(fakeBucketService, 'createNewBucket')
    .and.returnValues(of(fakeBukets[0]));
  })
});