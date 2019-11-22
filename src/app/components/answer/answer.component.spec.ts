import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerComponent } from './answer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { UrlService } from '../../services/urls/url.service';
import { QuestionScoreService } from '../../services/question-score/question-score.service';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('AnswerComponent', () => {
  let component: AnswerComponent;
  let fixture: ComponentFixture<AnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, NgbModule],
      declarations: [AnswerComponent, NgbActiveModal],
      providers: [QuestionScoreService, UrlService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
