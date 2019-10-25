import { async, ComponentFixture, TestBed} from '@angular/core/testing';
import { AnswerComponent } from './answer.component';
import { Dependencies } from '../../screenforce.test.module';
import { Question } from '../../entities/Question';
import { Bucket } from '../../entities/Bucket';

describe('AnswerComponent', () => {
  let component: AnswerComponent;
  let fixture: ComponentFixture<AnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies)
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

