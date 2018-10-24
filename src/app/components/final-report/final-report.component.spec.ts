import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalReportComponent } from './final-report.component';
import { ScreeningService } from '../../services/screening/screening.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { SimpleTraineeService } from '../../services/simpleTrainee/simple-trainee.service';
import { SkillTypesService } from '../../services/skill-types/skill-types.service';
import { SkillTypeBucketService } from '../../services/skillTypeBucketLookup/skill-type-bucket.service';
import { QuestionScoreService } from '../../services/question-score/question-score.service';
import { ScoresToBucketsUtil } from '../../util/scoresToBuckets.util';
import { AlertsService } from '../../services/alert-service/alerts.service';
import { SoftSkillsViolationService } from '../../services/soft-skills-violation/soft-skills-violation.service';
import { UrlService } from '../../services/urls/url.service';

// Author: David Gustafson
// Can't test because of error: "Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https"

describe('FinalReportComponent', () => {
  let component: FinalReportComponent;
  let fixture: ComponentFixture<FinalReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalReportComponent ],
      providers: [ ScreeningService, HttpClient, HttpHandler, SimpleTraineeService, SkillTypesService,
        SkillTypeBucketService, QuestionScoreService, ScoresToBucketsUtil, AlertsService, SoftSkillsViolationService, UrlService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
