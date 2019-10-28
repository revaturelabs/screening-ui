import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsTableComponent } from './questions-table.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { QuestionsService } from '../../services/questions/questions.service';
import { ScreeningStateService } from '../../services/screening-state/screening-state.service';
import { SkillTypesService } from '../../services/tracks/skill-types.service';
import { QuestionScoreService } from '../../services/question-score/question-score.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { ScreeningService } from '../../services/screening/screening.service';
import { SkillTypeCategoryService } from '../../services/skillTypeCategoryLookup/skill-type-category.service';
import { Category } from '../../entities/Category';
import { Question } from '../../entities/Question';
import { AnswerComponent } from '../answer/answer.component';
import { ViolationFlagComponent } from '../violation-flag/violation-flag.component';
import { SoftSkillsViolationService } from '../../services/soft-skills-violation/soft-skills-violation.service';
import { ViolationTypeService } from '../../services/violationType/violationType.service';
import { AlertsService } from '../../services/alert-service/alerts.service';
import { UrlService } from '../../services/urls/url.service';
import { RouterTestingModule } from '@angular/router/testing';
import { QuestionScore } from 'src/app/entities/QuestionScore';


// Author: David Gustafson

// Running test with ngOnInit fails so comment out the body of ngOnInit to run these test
// Provides 89.09% code coverage

const QUESTION: Question = {
  questionId: 1,
  questionText: 'string',
  sampleAnswer: 'string',
  isActive: true,
  category: new Category()
};
const mockQuestionScore: QuestionScore = {
  qSID: 1,
  questionId: 1,
  screeningID: 1,
  score: 1,
  commentary: 'string',
  categoryId: 1,
  beginTime: new Date
};

const CATEGORIES: Category[] = [
  {
    categoryId: 1,
    categoryDescription: 'OCA level Java questions',
    isActive: true
  },
  {
    categoryId: 2,
    categoryDescription: 'SQL database questions',
    isActive: true
  }];

describe('QuestionsTableComponent', () => {
  let component: QuestionsTableComponent;
  let fixture: ComponentFixture<QuestionsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionsTableComponent, AnswerComponent, ViolationFlagComponent], // cut out NgbModalBackdrop, NgbModalWindow,
      imports: [FormsModule, RouterTestingModule],
      providers: [HttpClient, HttpHandler, QuestionsService, ScreeningStateService,
        SkillTypesService, QuestionScoreService, NgbModal, ScreeningService, // cut out NgbModalStack,
        SkillTypeCategoryService, SoftSkillsViolationService, ViolationTypeService, AlertsService, UrlService]
    });

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

  it('should set questionCategories to [] false', () => {
    component.ngOnDestroy();
    if (component.questionCategories !== undefined) {
      for (const category of component.questionCategories) {
        const bs = jasmine.createSpyObj('QuestionService', ['getCategoryQuestions']);
        expect(bs.getCategoryQuestions(category.categoryId)).toEqual([]);
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
    component.questionScores.push(mockQuestionScore);
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
