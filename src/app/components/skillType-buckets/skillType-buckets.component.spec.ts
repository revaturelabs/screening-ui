import { async, ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { RouterTestingModule } from '@angular/router/testing';
=======

import { RouterTestingModule } from '@angular/router/testing';

>>>>>>> 09041209e82029d78696cf21e1c96ead147c23c4
import { BucketsService } from '../../services/buckets/buckets.service';
import { SkillTypeBucketsComponent } from './skillType-buckets.component';
import { FormsModule } from '@angular/forms';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertsService } from 'src/app/services/alert-service/alerts.service';
import { HttpModule } from '@angular/http';
import { Buckets } from 'aws-sdk/clients/s3';
import { Bucket } from 'src/app/entities/Bucket';
<<<<<<< HEAD
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { UrlService } from 'src/app/services/urls/url.service';
describe('SkillTypeBucketsComponent', () => {
let fixture:ComponentFixture<SkillTypeBucketsComponent>;
let component:SkillTypeBucketsComponent;
let fakeBucketService:BucketsService;
let mockbucket:Bucket={
  bucketId: 1,
  bucketDescription:"Hi",
  isActive:true
}
let fakeBukets:Bucket[]=[mockbucket];
=======


import { of } from 'rxjs';

import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { UrlService } from 'src/app/services/urls/url.service';

describe('SkillTypeBucketsComponent', () => {

let fixture:ComponentFixture<SkillTypeBucketsComponent>;
let component:SkillTypeBucketsComponent;
let fakeBucketService:BucketsService;
let fakeBukets:Bucket[]=[null];

>>>>>>> 09041209e82029d78696cf21e1c96ead147c23c4
beforeEach(()=>{
  TestBed.configureTestingModule({
    imports:[RouterTestingModule,FormsModule,HttpModule,HttpClientModule],
    declarations:[SkillTypeBucketsComponent],
    providers:[BucketsService,AlertsService,UrlService]
  })
  fixture=TestBed.createComponent(SkillTypeBucketsComponent);
  component=fixture.componentInstance;
  fakeBucketService=TestBed.get(BucketsService);
});
<<<<<<< HEAD
=======


>>>>>>> 09041209e82029d78696cf21e1c96ead147c23c4
it(`Checking if all buckets were returned`,()=>{
   spyOn(fakeBucketService,`getAllBuckets`)
   .and.returnValues(of(fakeBukets));
  
<<<<<<< HEAD
});
it('Checking if bucket is created', () => {
  spyOn(fakeBucketService, 'createNewBucket')
  .and.returnValues(of(fakeBukets[0]));
})
});
=======
})
>>>>>>> 09041209e82029d78696cf21e1c96ead147c23c4




<<<<<<< HEAD
=======


});
>>>>>>> 09041209e82029d78696cf21e1c96ead147c23c4
