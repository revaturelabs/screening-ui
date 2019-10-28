
// Testing modules
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

// Modules
import { Dependencies } from '../../screenforce.test.module';

// Components
import { QuestionComponent } from './question.component';

import { Question } from '../../entities/Question';
import { Bucket } from 'src/app/entities/Bucket';

/**
 * Test for methods on the question component.
 *
 * @author Antonio Marrero Bonilla | 1803-USF-MAR26 | Wezley Singleton
 *
 * @author Byron Hall | 1803-USF-MAR26 | Wezley Singleton
 **/

/**
 * Setting up the testing environment for question component.
 **/
describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;
  let testBucket: Bucket = {
    bucketId: 1,
    bucketDescription: 'desc',
    isActive: true
  };
  let testQuestion: Question = {
    questionId: 1,
    questionText: 'text',
    sampleAnswer: 'sample answer',
    isActive: true,
    bucket: testBucket
  };

  /**
   * Import dependencies and set the TestBed to configure the testing module.
   **/
  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies)
      .compileComponents();
  }), 1440000);

  /**
   * Set up a fixture to use instead of using testbed. This allows us to use
   * the question component as an instace of the question component for testing.
   **/
  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Test if the components is created.
   *
   * Function tested: None, just check if the component gets created.
   **/
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
  * Test if it opens an modal given a modal id.
  *
  * Function tested: open()
  **/
  it('should open modal-content', () => {
    const content = document.querySelector('.modal-content');
    component.open(content);
    document.querySelector('.modal-content');
    expect(content).toBeDefined('defined');
  });

  /**
   *  Used to validate the create/update question form.
   *
   * Function tested: initFormControl()
   */
  it('should create a form group element name', () => {
    component.initFormControl();
    component.createQuestion.controls['name'].setValue('test');
    expect(component.createQuestion.valid).toBeTruthy();
  });

  /**
  * Test if the question status changes from active to deactive.
  *
  * Function tested: changeQuestionStatus()
  **/
  it('should change question status', () => {
    component.changeQuestionStatus(component.questions[0]);
    expect(component.questions[0].isActive).toBe(false);
    component.changeQuestionStatus(component.questions[0]);
    expect(component.questions[0].isActive).toBe(true);
  });

  /**
   * Test if the question is set to null after a save.
   *
   * Function tested: setQuestionNull()
   **/
  it('should set question to null', () => {
    component.setQuestionNull();
    expect(component.question).toEqual(new Question());
  });

  // /**
  //  * Test if the question gets edited or not.
  //  *
  //  * Function Tested: editQuestion()
  //  **/
  it('should edit a question', () => {
    component.questions = [testQuestion];
    component.editQuestion(component.questions[0]);
    expect(component.question).toEqual(component.questions[0]);
  });
});

