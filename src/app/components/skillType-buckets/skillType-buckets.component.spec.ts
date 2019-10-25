import { async, ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTabset, NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { SkillTypeBucketsComponent } from './skillType-buckets.component';
import { Dependencies } from 'src/app/caliber.test.module';
import { Bucket } from 'src/app/entities/Bucket';
=======
import { RouterTestingModule } from '@angular/router/testing';
import { BucketsService } from '../../services/buckets/buckets.service';
import { SkillTypeBucketsComponent } from './skillType-buckets.component';
import { FormsModule } from '@angular/forms';
import { AlertsService } from '../../services/alert-service/alerts.service';
import { Bucket } from '../../entities/Bucket';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { UrlService } from '../../services/urls/url.service';
>>>>>>> 9f992aaec9f4878c19f3226d81484f04dc80ecb1

/*
1907 Trevin batch
*/
describe('SkillTypeBucketsComponent', () => {
<<<<<<< HEAD
  let component: SkillTypeBucketsComponent;
  let fixture: ComponentFixture<SkillTypeBucketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillTypeBucketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Test component initialization
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // testing update bucket. Gets a bucket to update.
  it('should get a bucket', () => {
    expect(component.updateBucket).toBeTruthy();
  });

  // testing getting all buckets
  it('should get all buckets', () => {
    expect(component.getBuckets).toBeTruthy();
  });

  // Create dummy buckets to test on.
  // tslint:disable-next-line: prefer-const
  let aBucket: Bucket = {
    bucketId: 1,
    bucketDescription: 'abc',
    isActive: true
  };

  // tslint:disable-next-line: prefer-const
  let bBucket: Bucket = {
    bucketId: 2,
    bucketDescription: 'cba',
    isActive: true
  };

  // Testing compare method. Returns 1 when A is active, -1 when inactive.
  it('compare method should return -1', () => {
    expect(component.compare(aBucket, bBucket)).toEqual(-1);
  });

  it('compare method should return 1', () => {
    aBucket.isActive = false;
    expect(component.compare(aBucket, bBucket)).toEqual(1);
  });

=======
let fixture:ComponentFixture<SkillTypeBucketsComponent>;
let component:SkillTypeBucketsComponent;
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
    declarations:[SkillTypeBucketsComponent],
    providers:[BucketsService,AlertsService,UrlService]
  })
  fixture=TestBed.createComponent(SkillTypeBucketsComponent);
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
>>>>>>> 9f992aaec9f4878c19f3226d81484f04dc80ecb1
});
