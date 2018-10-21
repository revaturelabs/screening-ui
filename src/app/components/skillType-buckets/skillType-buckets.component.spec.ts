import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { SkillTypeBucketsComponent } from './skillType-buckets.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { BucketsService } from '../../services/buckets/buckets.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UrlService } from '../../services/urls/url.service';
import { QuestionsService } from '../../services/questions/questions.service';
import { AlertsService } from '../../services/alert-service/alerts.service';

describe('SkillTypeBucketsComponent', () => {
  let component: SkillTypeBucketsComponent;
  let fixture: ComponentFixture<SkillTypeBucketsComponent>;
  let httpClientSpyOnGet: {get: jasmine.Spy};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        SkillTypeBucketsComponent
      ],
      imports: [RouterTestingModule, FormsModule],
      providers: [BucketsService, HttpClient, HttpHandler, UrlService, QuestionsService, AlertsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillTypeBucketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getBuckets should return all buckets', () => {
    httpClientSpyOnGet = jasmine.createSpyObj('http',['get']);

  });
});
