import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ViolationFlagComponent } from 'src/app/components/violation-flag/violation-flag.component';
import { AnswerComponent } from './answer.component';
import { Dependencies } from 'src/app/caliber.test.module';
import { Question } from 'src/app/entities/Question';
import { SimpleTraineeService } from 'src/app/services/simpleTrainee/simple-trainee.service';
import { ViolationTypeService } from 'src/app/services/violationType/violationType.service';
import { By, by } from 'protractor';
import { SimpleTrainee } from 'src/app/entities/SimpleTrainee';

describe('AnswerComponent', () => {
  let component: AnswerComponent;
  let fixture: ComponentFixture<AnswerComponent>;
  let vio: ViolationFlagComponent;
  let serv: SimpleTraineeService;
  let spy: any;


  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerComponent);
    component = fixture.componentInstance;
    component.question = {
      questionId: 1,
    questionText: 'test',
    sampleAnswer1: 'TEst',
    sampleAnswer2: 'TEst',
    sampleAnswer3: 'TEst',
    sampleAnswer4: 'TEst',
    sampleAnswer5: 'TEst',
    isActive: true,
    bucket: 1
    };
    fixture.detectChanges();
  });

  it('should create',() => {
    expect(component).toBeTruthy();
  });
})