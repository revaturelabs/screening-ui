import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { SkillTypeBucketsComponent } from './skillType-buckets.component';
import { FormsModule } from '@angular/forms';
import { AlertsService } from 'src/app/services/alert-service/alerts.service';
import { BucketsService } from 'src/app/services/buckets/buckets.service';
import { QuestionsService } from 'src/app/services/questions/questions.service';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UrlService } from 'src/app/services/urls/url.service';
import { Bucket } from 'src/app/entities/Bucket';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModal, NgbModalRef, NgbModule } from '@ng-bootstrap/ng-bootstrap';


/**
 * Setting up the testing environment for skill type buckets component.
 **/
describe('SkillTypeBucketsComponent', () => {
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  let component: SkillTypeBucketsComponent;
  let fixture: ComponentFixture<SkillTypeBucketsComponent>;
  let bucket: Bucket;

  /**
  * Import dependencies and set the TestBed to configure the testing module.
  **/
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientTestingModule, RouterTestingModule,
        NgbModule.forRoot(),
      ],
      declarations: [
        SkillTypeBucketsComponent
      ],
      providers: [ 
        { provide: Router, useValue: routerSpy },
        AlertsService,
        BucketsService,
        QuestionsService,
        UrlService,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillTypeBucketsComponent);
    component = fixture.debugElement.componentInstance;
    bucket = {
      bucketId: 0,
      bucketDescription: 'description',
      isActive: true
    };
  });

  /**
  * Test if the components is created.
  *
  * Function tested: None, just check if the component gets created.
  **/
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  /**
  * Test if buckets are retrieved, assigned to buckets, and 
  * then sorted correctly w/ inactive buckets being ordered 
  * after active buckets.
  *
  * Function tested: getBuckets()
  **/
  it('should get and sort buckets', async(() => {
    let bucketsService = fixture.debugElement.injector.get(BucketsService);
    let buckets: Bucket[] = [
      {
        bucketId: 0,
        bucketDescription: 'description1',
        isActive: false
      },
      {
        bucketId: 1,
        bucketDescription: 'description2',
        isActive: true
      },
      {
        bucketId: 2,
        bucketDescription: 'description3',
        isActive: false
      },
      {
        bucketId: 3,
        bucketDescription: 'description4',
        isActive: true
      }
    ];
    spyOn(bucketsService, 'getAllBuckets').and.returnValue(of(buckets));
    component.getBuckets();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.buckets).toEqual(buckets);
      var i: number;
      for (i = 1; i < component.buckets.length; ++i) {
        if (component.buckets[i].isActive === true)
          expect(component.buckets[i - 1].isActive).toEqual(true);
        }
      });
  }));

  /**
  * Test if compare function returns the right number based on
  * the bucket arguments supplied (and they're isActive status)
  * as well as the order in which they're supplied to the function
  *
  * Function tested: compare(a: Bucket, b: Bucket)
  */
  it('should return -1 if the first bucket is active and 1 if it\'s not', () => {
    let buckets: Bucket[] = [{
      bucketId: 0,
      bucketDescription: 'description1',
      isActive: true
    },
    {
      bucketId: 1,
      bucketDescription: 'description2',
      isActive: false
    }
  ];
    let firstBucketIsActiveValue = component.alphabetize(buckets[0], buckets[1]);
    expect(firstBucketIsActiveValue).toEqual(-1);
    let secondBucketIsActiveValue = component.alphabetize(buckets[1], buckets[0]);
    expect(secondBucketIsActiveValue).toEqual(1);
  });

  /**
  * Test if setBucket() gets called and if router.navigate() calls 
  * the expected url 
  *
  * Function tested: routeToBucket(item: Bucket)
  **/
  it('should set a bucket and call the expected url when routing', () => {
    let fixture = TestBed.createComponent(SkillTypeBucketsComponent);
    let component = fixture.debugElement.componentInstance;
    let bucketsService = TestBed.get(BucketsService);
    let bucket: Bucket = {
      bucketId: 416,
      bucketDescription: 'SQL',
      isActive: true
    };
    spyOn(bucketsService, 'setBucket');
    let spy = component.router.navigate as jasmine.Spy;
    component.routeToBucket(bucket);
    expect(bucketsService.setBucket.calls.count()).toEqual(1);
    let navArgs = spy.calls.first().args[0];;
    expect(navArgs).toEqual(['settings/bucket']);
  });

  /**
  * Test if current bucket is set after being edited.
  *
  * Function tested: reditBucket(bucket: Bucket)
  **/
  it('should edit the current bucket', () => {
    component.editBucket(bucket);
    expect(component.currBucket).toEqual(bucket);
  });

  /**
  * Test if the methods to update a bucket, retrieve a bucket, and emit 
  * a message indicating success are called.
  *
  * Also, test if a null argument causes the bucket parameter to be set 
  * with the current bucket value.
  * 
  * Function tested: updateBucket(bucketParam: Bucket)
  **/
  it('should update a bucket and call a method to emit a success message', () => {
    let fixture = TestBed.createComponent(SkillTypeBucketsComponent);
    let component = fixture.debugElement.componentInstance;
    let bucketsService = fixture.debugElement.injector.get(BucketsService);
    let nullBucket: Bucket = null;
    spyOn(bucketsService, 'updateBucket').and.returnValue(of(bucket));
    spyOn(component, 'getBuckets');
    spyOn(component, 'savedSuccessfully');
    component.updateBucket(bucket);
    expect(bucketsService.updateBucket).toHaveBeenCalled();
    expect(component.getBuckets.calls.count()).toEqual(1);
    expect(component.savedSuccessfully.calls.count()).toEqual(1);
    
    let currentBucket: Bucket = {
      bucketId: 1,
      bucketDescription: 'null bucket should be replaced by the current bucket',
      isActive: true
    };
    component.getBuckets.calls.reset();
    component.savedSuccessfully.calls.reset();
    component.currBucket = currentBucket;
    component.updateBucket(nullBucket);
    expect(bucketsService.updateBucket).toHaveBeenCalled();
    expect(component.getBuckets.calls.count()).toEqual(1);
    expect(component.savedSuccessfully.calls.count()).toEqual(1);
  });

  /**
  * Test if the create bucket method being called causes the buckets 
  * variable to be set.
  *
  * Function tested: createBucket()
  **/
  it('should create a new bucket', () => {
    let bucketsService = fixture.debugElement.injector.get(BucketsService);
    spyOn(bucketsService, 'createNewBucket').and.returnValue(of(bucket));
    component.buckets = [];
    component.createBucket();
    expect(bucketsService.createNewBucket).toHaveBeenCalled();
    expect(component.buckets).toContain(bucket);
  });

  /**
  * Test if savedSuccessfully() can trigger a "success" message 
  * from the alert services' subject
  *
  * Function tested: savedSuccessfully()
  **/
  it('should emit the success message from alertsService', () => {
    let alertsService = TestBed.get(AlertsService);
    spyOn(alertsService, 'getMessage').and.returnValue(alertsService.subject);
    let alertsServicesSubj = alertsService.getMessage();
    alertsServicesSubj.subscribe((data) => {
      expect(data).toEqual({type: "success", text: "Saved successfully"});
    })
    component.savedSuccessfully();

  });
  
  /**
  * Test if the modal gets opened. And test if the close event 
  * triggering causes the new bucket variable to be instantiated
  * and the close result to be assigned a message indicating that
  * the modal closed.
  * 
  * Function tested: open(content)
  **/
  it('should open the modal and trigger the modal\'s close event', () => {
    let modalService = TestBed.get(NgbModal);
    let modalRef: NgbModalRef = modalService.open(component.createModalRef);
    spyOn(modalService, "open").and.returnValue(modalRef);
    component.open(component.createModalRef);
    expect(modalService.open).toHaveBeenCalled();
    let modalRefReturnObj = modalService.open(component.createModalRef);
    modalRef.close();
    modalRefReturnObj.result.then(() => {
      expect(component.newBucket).toEqual(new Bucket());
      expect(component.closeResult).toEqual('Closed with: undefined');
    }, () => {
    });
  });

  /**
  * Test if the modal gets opened. And test if the dismiss event 
  * triggering causes the new bucket's description field to be 
  * assigned an empty string as well as the dismiss result to be assigned a 
  * message indicating that the modal was dismissed. 
  *
  * Function tested: open(content)
  **/
  it('should open the modal and call the modal\'s dismiss event', () => {
    let modalService = TestBed.get(NgbModal);
    let modalRef: NgbModalRef = modalService.open(component.createModalRef);
    spyOn(modalService, "open").and.returnValue(modalRef);
    component.open(component.createModalRef);
    expect(modalService.open).toHaveBeenCalled();
    expect(component.newBucket).toEqual(new Bucket());
    let modalRefReturnObj = modalService.open(component.createModalRef);
    modalRef.dismiss();
    modalRefReturnObj.result.then(() => {
    }, () => {
      expect(component.newBucket.bucketDescription).toEqual('');
      expect(component.dismissResult).toEqual('Dismissed with: undefined');
    });
  });

});
