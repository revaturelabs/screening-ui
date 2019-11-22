import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionComponent } from './question.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UrlService } from '../../services/urls/url.service';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { AmplifyService } from 'aws-amplify-angular';
import { AlertsService } from '../../services/alert-service/alerts.service';
import { QuestionsService } from '../../services/questions/questions.service';
import { CategoriesService } from '../../services/categories/categories.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
      declarations: [QuestionComponent, NgbModal],
      providers: [
        QuestionsService,
        CategoriesService,
        AuthenticationService,
        AmplifyService,
        AlertsService,
        UrlService
      ]
    });

    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
