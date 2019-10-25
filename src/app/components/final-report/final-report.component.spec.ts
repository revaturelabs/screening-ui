import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalReportComponent } from './final-report.component';

import { Dependencies } from '../../screenforce.test.module';
import { AlertsService } from 'src/app/services/alert-service/alerts.service';
import { HttpClient } from 'selenium-webdriver/http';
import { UrlService } from 'src/app/services/urls/url.service';
import { SkillTypesService } from 'src/app/services/skill-types/skill-types.service';
import { QuestionScore } from 'src/app/entities/QuestionScore';
import { SoftSkillViolation } from 'src/app/entities/SoftSkillViolation';
import { Screening } from 'src/app/entities/Screening';


// Author: David Gustafson
// Can't test because of error: "Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https"

describe('FinalReportComponent', () => {
  let component: FinalReportComponent;
  let fixture: ComponentFixture<FinalReportComponent>;
  //let service: MockUser;
  let alertService: AlertsService;
  let client: HttpClient;
  let url: UrlService;
  let skillType: SkillTypesService;
  let testQuestionScore: QuestionScore;
  let softSkillsViolation: SoftSkillViolation;
  let screeningToken: Screening;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies)
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalReportComponent);
    component = fixture.componentInstance;
    //service = new MockUser(client, url, skillType);

    screeningToken = {
      screeningId: 1,
      screenerId: 2,
      compositeScore: 4,
      aboutMeCommentary: 'comment',
      generalCommentary: 'general comment',
      softSkillCommentary: 'yes yes',
      startDateTime: new Date(),
      endDateTime: new Date(),
      softSkillsVerdict: false,
      status: 'test',
      scheduledScreening: {
        scheduledScreeningId: 12,
        scheduledStatus: 'test',
        scheduledDate: new Date(),
        candidate: null,
        track: {
          skillTypeId: 0,
          title: 'title',
          active: true
        }
      }
    };

    localStorage.setItem('screening', JSON.stringify(screeningToken));

    fixture.detectChanges();
  });

  it('should create final-report component', () => {
    expect(component).toBeTruthy();
  });

  it('should return false for checked', () => {
    const result = component.checked;
    expect(result).toBe('false');
  });

  it('should change status of checked on copyToClipBoard()', () => {
    component.copyToClipboard();
    expect(component.checked).toBe('true');
  });

  it('should reset question scores and violations', () => {
    testQuestionScore = {
      qSID: 100,
      questionId: 1,
      screeningID: 2,
      score: 3,
      commentary: 'informative',
      bucketId: 1,
      beginTime: new Date()
    };

    softSkillsViolation = {
      violationID: 1,
      screeningID: 2,
      violationType: {
        violationTypeId: 1,
        violationType: 'profanity'
      },
      Time: new Date(),
      Comment: 'bad no no'
    };

    component.questionScores.push(testQuestionScore);
    component.softSkillViolations.push(softSkillsViolation);
    component.ngOnDestroy();
    expect(component.questionScores.length).toEqual(0);
    expect(component.softSkillViolations.length).toEqual(0);

  });

  it('should remove screeningID from localStorage', () => {
    localStorage.setItem('screeningID', '1');
    localStorage.setItem('scheduledScreeningID', '123');
    component.ngOnDestroy();
    expect(localStorage.getItem('screeningID')).toBeNull();
    expect(localStorage.getItem('scheduledScreeningID')).toBeNull();
  });

});
