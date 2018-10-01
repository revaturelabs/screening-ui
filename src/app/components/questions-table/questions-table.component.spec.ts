// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { QuestionsTableComponent } from './questions-table.component';
// import { FormsModule } from '@angular/forms';
// import { HttpClient, HttpHandler } from '@angular/common/http';
// import { QuestionService } from '../../services/question/question.service';
// import { SimpleTraineeService } from '../../services/simpleTrainee/simple-trainee.service';
// import { SkillTypesService } from '../../services/skill-types/skill-types.service';
// import { QuestionScoreService } from '../../services/question-score/question-score.service';
// import { QuestionsToBucketsUtil } from '../../util/questionsToBuckets.util';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';
// import { NgbModalBackdrop } from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';
// import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
// import { NgbModalWindow } from '@ng-bootstrap/ng-bootstrap/modal/modal-window';
// import { ScreeningService } from '../../services/screening/screening.service';
// import { SkillTypeBucketService } from '../../services/skillTypeBucketLookup/skill-type-bucket.service';
// import { Bucket } from '../../entities/Bucket';
// import { Question } from '../../entities/Question';
// import { AnswerComponent } from '../answer/answer.component';
// import { ViolationFlagComponent } from '../violation-flag/violation-flag.component';
// import { SoftSkillsViolationService } from '../../services/soft-skills-violation/soft-skills-violation.service';
// import { ViolationTypeService } from '../../services/violationType/violationType.service';
// import { AlertsService } from '../../services/alert-service/alerts.service';

// // Author: David Gustafson

// // Running test with ngOnInit fails so comment out the body of ngOnInit to run these test
// // Provides 89.09% code coverage

// const QUESTION: Question = {
//   questionId: 1,
//   questionText: 'string',
//   sampleAnswer1: 'string',
//   sampleAnswer2: 'string',
//   sampleAnswer3: 'string',
//   sampleAnswer4: 'string',
//   sampleAnswer5: 'string',
//   isActive: true,
//   bucket: new Bucket()
// };

// const BUCKETS: Bucket[] = [
//   {
//     bucketId: 1,
//     bucketDescription: 'OCA level Java questions',
//     isActive: true,
//     questions: null
//   },
//   {
//     bucketId: 2,
//     bucketDescription: 'SQL database questions',
//     isActive: true,
//     questions: null
//   }];

// describe('QuestionsTableComponent', () => {
//   let component: QuestionsTableComponent;
//   let fixture: ComponentFixture<QuestionsTableComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [QuestionsTableComponent, NgbModalBackdrop, NgbModalWindow, AnswerComponent, ViolationFlagComponent],
//       imports: [FormsModule],
//       providers: [HttpClient, HttpHandler, QuestionService, SimpleTraineeService,
//         SkillTypesService, QuestionScoreService, QuestionsToBucketsUtil, NgbModal, NgbModalStack, ScreeningService,
//         SkillTypeBucketService, SoftSkillsViolationService, ViolationTypeService, AlertsService]
//     });

//     TestBed.overrideModule(BrowserDynamicTestingModule, {
//       set: {
//         entryComponents: [QuestionsTableComponent, NgbModalBackdrop, NgbModalWindow, AnswerComponent, ViolationFlagComponent]
//       }
//     })
//       .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(QuestionsTableComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should set questionBuckets to [] false', () => {
//     component.ngOnDestroy();
//     if (component.questionBuckets !== undefined) {
//       for (const bucket of component.questionBuckets) {
//         expect(bucket.questions).toEqual([]);
//       }
//     }
//   });

//   it('should set questionBuckets to [] true', () => {
//     component.questionBuckets = BUCKETS;
//     component.ngOnDestroy();
//     if (component.questionBuckets !== undefined) {
//       for (const bucket of component.questionBuckets) {
//         expect(bucket.questions).toEqual([]);
//       }
//     }
//   });

//   it('should set currentCategory to bucket', () => {
//     component.questionBuckets = BUCKETS;
//     component.questionBuckets[0].bucketId = 1;
//     component.setBucket(1);
//     expect(component.currentCategory.bucketId).toBe(1);
//   });

//   it('should set run open', () => {
//     const spy = spyOn(component, 'open');
//     component.open(QUESTION);
//     expect(spy).toHaveBeenCalled();
//   });

//   it('should return false', () => {
//     expect(component.isAnsweredQuestion(QUESTION)).toBeFalsy();
//   });

//   it('should return true', () => {
//     component.questionScores.push({
//       qSID: 1,
//       questionId: 1,
//       screeningID: 1,
//       score: 1,
//       commentary: 'string',
//       beginTime: new Date});
//     expect(component.isAnsweredQuestion(QUESTION)).toBeTruthy();
//   });

//   it('should return true', () => {
//     expect(component.submitAllowed()).toBeTruthy();
//   });

//   it('should return false', () => {
//     component.generalComment = 'here';
//     expect(component.submitAllowed()).toBeFalsy();
//   });

//   // it('should set comment', () => {
//   //   const mine = new QuestionsTableComponent(null, null, null, null, null,
//   //     new ScreeningService(new HttpClient({} as HttpHandler), null), null, null);
//   //   mine.generalComment = 'hi';
//   //   expect(mine.saveFeedback()).toBeTruthy();
//   // });

// });
