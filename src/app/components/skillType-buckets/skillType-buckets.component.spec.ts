import { TestBed, async } from '@angular/core/testing';
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

describe('SkillTypeBucketsComponent', () => {
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientTestingModule
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
  });

  it('should create', () => {
    let fixture = TestBed.createComponent(SkillTypeBucketsComponent);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should get buckets', async(() => {
    let fixture = TestBed.createComponent(SkillTypeBucketsComponent);
    let component = fixture.debugElement.componentInstance;
    let bucketsService = fixture.debugElement.injector.get(BucketsService);
    let buckets: Bucket[] = [{
      bucketId: 0,
      bucketDescription: 'description',
      isActive: true
    }];
    spyOn(bucketsService, 'getAllBuckets').and.returnValue(of(buckets));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.buckets).toEqual(buckets);
    });
  }));

  it('should return -1 if the first bucket is active and 1 if not', () => {
    let fixture = TestBed.createComponent(SkillTypeBucketsComponent);
    let component = fixture.debugElement.componentInstance;
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
    let firstBucketIsActiveValue = component.compare(buckets[0], buckets[1]);
    expect(firstBucketIsActiveValue).toEqual(-1);
    let secondBucketIsActiveValue = component.compare(buckets[1], buckets[0]);
    expect(secondBucketIsActiveValue).toEqual(1);
  });

  it('should route to the question component', () => {
    let bucketsService = TestBed.get(BucketsService);
    let bucket: Bucket = {
      bucketId: 416,
      bucketDescription: 'SQL',
      isActive: true
    };
    bucketsService.setBucket(bucket);
    expect(bucketsService.currentBucket).toEqual(bucket);

    let fixture = TestBed.createComponent(SkillTypeBucketsComponent);
    let component = fixture.debugElement.componentInstance;
    const spy = component.router.navigate as jasmine.Spy;
    component.routeToBucket(bucket);
    const navArgs = spy.calls.first().args[0];;
    expect(navArgs).toEqual(['settings/bucket']);
  });

  it('should edit the current bucket', () => {
    let fixture = TestBed.createComponent(SkillTypeBucketsComponent);
    let component = fixture.debugElement.componentInstance;
    let bucket: Bucket = {
      bucketId: 0,
      bucketDescription: 'description',
      isActive: true
    };
    component.editBucket(bucket);
    expect(component.currBucket).toEqual(bucket);
  });

  it('should update buckets', async(() => {
    let fixture = TestBed.createComponent(SkillTypeBucketsComponent);
    let component = fixture.debugElement.componentInstance;
    let bucketsService = fixture.debugElement.injector.get(BucketsService);
    let bucket: Bucket = {
      bucketId: 0,
      bucketDescription: 'description',
      isActive: true
    };
    spyOn(bucketsService, 'updateBucket').and.returnValue(of(bucket));
    let bucketsObservable = bucketsService.updateBucket(bucket);
    bucketsObservable.subscribe(data => spyOn(bucketsService, 'getAllBuckets').and.returnValue(of([data])));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.buckets[0]).toEqual(bucket);
    });
  }));

  it('should create a new bucket', async(() => {
    let fixture = TestBed.createComponent(SkillTypeBucketsComponent);
    let component = fixture.debugElement.componentInstance;
    let bucketsService = fixture.debugElement.injector.get(BucketsService);
    let bucket: Bucket = {
      bucketId: 0,
      bucketDescription: 'description',
      isActive: true
    };
    spyOn(bucketsService, 'createNewBucket').and.returnValue(of(bucket));
    let bucketsObservable = bucketsService.createNewBucket(bucket);
    bucketsObservable.subscribe(data => component.buckets = [data]);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.buckets[0]).toEqual(bucket);
    });
  }));

  it('should call the alert service\'s success()', () => {
    let fixture = TestBed.createComponent(SkillTypeBucketsComponent);
    let component = fixture.debugElement.componentInstance;
    let alertsService = TestBed.get(AlertsService);
    alertsService.subject.subscribe((data) => {
      expect(data).toEqual('{ type: \'success\', text: message }');
    });
    
  });

});
