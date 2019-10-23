import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalReportComponent } from './final-report.component';
import { Dependencies } from 'src/app/caliber.test.module';
import { MockUser } from 'src/app/mock-data/mocksimpleservice.service';
import { UrlService } from 'src/app/services/urls/url.service';
import { SkillTypesService } from 'src/app/services/skill-types/skill-types.service';
import { HttpClient } from '@angular/common/http';
import { QuestionScore } from 'src/app/entities/QuestionScore';
import { AlertsService } from 'src/app/services/alert-service/alerts.service';
import { SoftSkillViolation } from 'src/app/entities/SoftSkillViolation';
import { Screening } from 'src/app/entities/Screening';
import { TRAINEES } from 'src/app/mock-data/mock-simpleTrainees';
import { SKILLTYPES } from 'src/app/mock-data/mock-skillTypes';


// Author: David Gustafson
// Can't test because of error: "Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https"

describe('FinalReportComponent', () => {
  let component: FinalReportComponent;
  let fixture: ComponentFixture<FinalReportComponent>;
  let service: MockUser;
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
    service = new MockUser(client, url, skillType);

    screeningToken = {
      screeningId: 1,
      screenerId: 2,
      skillType: 3,
      compositeScore: 4,
      aboutMeCommentary: 'comment',
      generalCommentary: 'general comment',
      softSkillCommentary: 'yes yes',
      startDateTime: new Date(),
      endDateTime: new Date(),
      softSkillsVerdict: false,
      status: 'test',
      scheduledScreeningId: 12,
      scheduledScreening: {
        scheduledScreeningId: 12,
        trainee: TRAINEES[0],
        track: SKILLTYPES[0],
        scheduledStatus: 'test',
        trainer: 999,
        scheduledDate: new Date(),
        skillTypeId: 333
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

  it('should return name of canidate', () => {
    expect(service.getSelectedCandidate().firstname).toBe('Test');
    expect(service.getSelectedCandidate().lastname).toBe('Test');
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
