import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsTableComponent } from './questions-table.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { QuestionsService } from '../../services/questions/questions.service';
import { SimpleTraineeService } from '../../services/simpleTrainee/simple-trainee.service';
import { SkillTypesService } from '../../services/skill-types/skill-types.service';
import { QuestionScoreService } from '../../services/question-score/question-score.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';
// import { NgbModalBackdrop } from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
// import { NgbModalWindow } from '@ng-bootstrap/ng-bootstrap/modal/modal-window';
import { ScreeningService } from '../../services/screening/screening.service';
import { SkillTypeBucketService } from '../../services/skillTypeBucketLookup/skill-type-bucket.service';
import { Bucket } from '../../entities/Bucket';
import { Question } from '../../entities/Question';
import { AnswerComponent } from '../answer/answer.component';
import { ViolationFlagComponent } from '../violation-flag/violation-flag.component';
import { SoftSkillsViolationService } from '../../services/soft-skills-violation/soft-skills-violation.service';
import { ViolationTypeService } from '../../services/violationType/violationType.service';
import { AlertsService } from '../../services/alert-service/alerts.service';
import { UrlService } from 'src/app/services/urls/url.service';

import { TRAINEES } from 'src/app/mock-data/mock-simpleTrainees';
import { RouterTestingModule } from '@angular/router/testing';

// Author: David Gustafson

// Running test with ngOnInit fails so comment out the body of ngOnInit to run these test
// Provides 89.09% code coverage

const QUESTION: Question = {
  questionId: 1,
  questionText: 'string',
  sampleAnswer1: 'string',
  sampleAnswer2: 'string',
  sampleAnswer3: 'string',
  sampleAnswer4: 'string',
  sampleAnswer5: 'string',
  isActive: true,
  bucket: new Bucket()
};

const BUCKETS: Bucket[] = [
  {
    bucketId: 1,
    bucketDescription: 'OCA level Java questions',
    isActive: true
  },
  {
    bucketId: 2,
    bucketDescription: 'SQL database questions',
    isActive: true
  }];

describe('QuestionsTableComponent', () => {
  let component: QuestionsTableComponent;
  let fixture: ComponentFixture<QuestionsTableComponent>;
  let simpleTraineeServiceStub: Partial<SimpleTraineeService>;
  simpleTraineeServiceStub = {
    getSelectedCandidate() {
      return TRAINEES[0];
    }
  }
  let modalServiceStub: Partial<NgbModal>;
  modalServiceStub = {

  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionsTableComponent, AnswerComponent, ViolationFlagComponent], //cut out NgbModalBackdrop, NgbModalWindow,
      imports: [FormsModule, RouterTestingModule],
      providers: [HttpClient, HttpHandler, QuestionsService, SimpleTraineeService,
        SkillTypesService, QuestionScoreService, NgbModal, ScreeningService, //cut out NgbModalStack, 
        SkillTypeBucketService, SoftSkillsViolationService, ViolationTypeService, AlertsService, UrlService]
    });

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set currentCategory to bucket', () => {
    component.questionBuckets = BUCKETS;
    component.questionBuckets[0].bucketId = 1;
    component.setBucket(1);
    expect(component.currentBucket).toBe(1);
  });

  it('should set run open', () => {
    const spy = spyOn(component, 'open');
    component.open(QUESTION);
    expect(spy).toHaveBeenCalled();
  });

  it('should return false 1', () => {
    expect(component.isAnsweredQuestion(QUESTION)).toBeFalsy();
  });

  it('should return true 1', () => {
    component.questionScores.push({
      qSID: 1,
      questionId: 1,
      screeningID: 1,
      score: 1,
      commentary: 'string',
      bucketId: 1,
      beginTime: new Date});
    expect(component.isAnsweredQuestion(QUESTION)).toBeTruthy();
  });

  it('should return true 2', () => {
    expect(component.submitAllowed()).toBeTruthy();
  });

  it('should return false 2', () => {
    component.generalComment = 'here';
    expect(component.submitAllowed()).toBeFalsy();
  });

});
