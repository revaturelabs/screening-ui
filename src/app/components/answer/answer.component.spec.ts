import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerComponent } from './answer.component';
import { FormsModule } from '@angular/forms';
import { ViolationFlagComponent } from '../violation-flag/violation-flag.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { QuestionScoreService } from '../../services/question-score/question-score.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UrlService } from '../../services/urls/url.service';
import { SoftSkillsViolationService } from '../../services/soft-skills-violation/soft-skills-violation.service';
import { SimpleTraineeService } from '../../services/simpleTrainee/simple-trainee.service';
import { SkillTypesService } from '../../services/skill-types/skill-types.service';
import { ViolationTypeService } from '../../services/violationType/violationType.service';
import { AlertsService } from '../../services/alert-service/alerts.service';
import { ScreeningService } from '../../services/screening/screening.service';

describe('AnswerComponent', () => {
  let component: AnswerComponent;
  let fixture: ComponentFixture<AnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerComponent, ViolationFlagComponent ],
      imports: [FormsModule],
      providers: [NgbActiveModal, QuestionScoreService, HttpClient, HttpHandler, UrlService, SoftSkillsViolationService, ScreeningService, SimpleTraineeService, SkillTypesService, ViolationTypeService, AlertsService]
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
