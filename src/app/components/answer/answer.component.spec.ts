import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerComponent } from './answer.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import {  FormsModule } from '@angular/forms';
import { ViolationFlagComponent } from '../violation-flag/violation-flag.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { QuestionScoreService } from 'src/app/services/question-score/question-score.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UrlService } from 'src/app/services/urls/url.service';
import { SoftSkillsViolationService } from 'src/app/services/soft-skills-violation/soft-skills-violation.service';
import { ScreeningStateService } from 'src/app/services/screening-state/screening-state.service';
import { SkillTypesService } from 'src/app/services/skill-types/skill-types.service';
import { ViolationTypeService } from 'src/app/services/violationType/violationType.service';
import { AlertsService } from 'src/app/services/alert-service/alerts.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Question } from 'src/app/entities/Question';
import { Bucket } from 'src/app/entities/Bucket';


describe('AnswerComponent', () => {
  let component: AnswerComponent;
  let fixture: ComponentFixture<AnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerComponent, ViolationFlagComponent ],
      imports: [FormsModule, RouterTestingModule],
      providers: [NgbActiveModal, QuestionScoreService, HttpClient, HttpHandler, UrlService, SoftSkillsViolationService,
      ScreeningStateService, SkillTypesService, ViolationTypeService, AlertsService, Question]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerComponent);
    fixture.componentInstance.question = new Question();
    fixture.componentInstance.question.bucket = new Bucket();
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
