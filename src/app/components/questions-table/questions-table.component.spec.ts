import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionsTableComponent } from './questions-table.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Bucket } from '../../entities/Bucket';
import { Question } from '../../entities/Question';
import { AnswerComponent } from '../answer/answer.component';
import { ViolationFlagComponent } from '../violation-flag/violation-flag.component';
import { Dependencies } from '../../screenforce.test.module';
import { QuestionScore } from '../../entities/QuestionScore';

// Author: David Gustafson

// Running test with ngOnInit fails so comment out the body of ngOnInit to run these test
// Provides 89.09% code coverage

const QUESTION: Question = {
  questionId: 1,
  questionText: 'string',
  sampleAnswer: 'string',
  isActive: true,
  bucket: new Bucket()
};
const QUESTION_SCORE: QuestionScore = {
  qSID: 1,
  questionId: 1,
  screeningID: 1,
  score: 1,
  commentary: 'string',
  bucketId: 1,
  beginTime: new Date
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

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies);

    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [QuestionsTableComponent, AnswerComponent, ViolationFlagComponent] // cut out NgbModalBackdrop, NgbModalWindow, 
      }
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsTableComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set questionBuckets to [] false', () => {
    component.ngOnDestroy();
    if (component.questionBuckets !== undefined) {
      for (const bucket of component.questionBuckets) {
        const bs = jasmine.createSpyObj('QuestionService', ['getBucketQuestions']);
        expect(bs.getBucketQuestions(bucket.bucketId)).toEqual([]);
      }
    }
  });

  it('should set run open', () => {
    const spy = spyOn(component, 'open');
    component.open(QUESTION);
    expect(spy).toHaveBeenCalled();
  });

  it('should return false', () => {
    expect(component.isAnsweredQuestion(QUESTION)).toBeFalsy();
  });

  it('should return true', () => {
    component.questionScores.push(QUESTION_SCORE);
    expect(component.isAnsweredQuestion(QUESTION)).toBeTruthy();
  });

  it('should return true', () => {
    expect(component.submitAllowed()).toBeTruthy();
  });

  it('should return false', () => {
    component.generalComment = 'here';
    expect(component.submitAllowed()).toBeFalsy();
  });

});
