import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerComponent } from './answer.component';
import { ViolationFlagComponent } from '../violation-flag/violation-flag.component';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { QuestionsService } from 'src/app/services/questions/questions.service';
import { QuestionScoreService } from 'src/app/services/question-score/question-score.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UrlService } from 'src/app/services/urls/url.service';
import { SoftSkillsViolationService } from 'src/app/services/soft-skills-violation/soft-skills-violation.service';
import { SimpleTraineeService } from 'src/app/services/simpleTrainee/simple-trainee.service';
import { SkillTypesService } from 'src/app/services/skill-types/skill-types.service';
import { ViolationTypeService } from 'src/app/services/violationType/violationType.service';
import { AlertsService } from 'src/app/services/alert-service/alerts.service';

describe('AnswerComponent', () => {
  let component: AnswerComponent;
  let fixture: ComponentFixture<AnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ AnswerComponent, ViolationFlagComponent ],
      providers: [ NgbActiveModal, QuestionScoreService, HttpClient,
                    HttpHandler,  UrlService, SoftSkillsViolationService,
                    SimpleTraineeService, SkillTypesService,
                    ViolationTypeService, AlertsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
