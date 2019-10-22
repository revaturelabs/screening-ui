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

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies)
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalReportComponent);
    component = fixture.componentInstance;
    service = new MockUser(client, url, skillType);
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


  it('should reset question scores', () => {
    testQuestionScore = {
      qSID: 100,
      questionId: 1,
      screeningID: 2,
      score: 3,
      commentary: 'informative',
      bucketId: 1,
      beginTime: new Date()
    };

    component.questionScores.push(testQuestionScore);
    component.ngOnDestroy();
    expect(component.questionScores.length).toEqual(0);

  });

  it('should reset softskill violations', () => {
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

    component.softSkillViolations.push(softSkillsViolation);
    component.ngOnDestroy();
    expect(component.softSkillViolations.length).toEqual(0);

  });

  it('should remove screeningID from localStorage', () => {
    localStorage.setItem('screeningID', '1');
    component.ngOnDestroy();
    expect(localStorage.getItem('screeningID')).toBeNull();
  });

  it('should remove scheduledScreeningID from localStorage', () => {
    localStorage.setItem('scheduledScreeningID', '123');
    component.ngOnDestroy();
    expect(localStorage.getItem('scheduledScreeningID')).toBeNull();
  });

});
