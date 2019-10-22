import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTabset, NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { SkillTypeBucketsComponent } from './skillType-buckets.component';
import { Dependencies } from 'src/app/caliber.test.module';
import { Bucket } from 'src/app/entities/Bucket';

/*
1907 Trevin batch
*/
describe('SkillTypeBucketsComponent', () => {
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

});
