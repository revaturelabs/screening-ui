import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { UrlService } from 'src/app/services/urls/url.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import Amplify from 'aws-amplify';
import { AmplifyService } from 'aws-amplify-angular';
import { AlertsService } from 'src/app/services/alert-service/alerts.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockAuthenticationService:AuthenticationService;



  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule, HttpModule, HttpClientModule],
      declarations: [ LoginComponent ],
      providers: [AuthenticationService, AmplifyService, AlertsService,UrlService]
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    mockAuthenticationService =TestBed.get(AuthenticationService);
  });

  it('should create', (done: DoneFn) => {
    expect(component).toBeTruthy();
    done();
  });
});
