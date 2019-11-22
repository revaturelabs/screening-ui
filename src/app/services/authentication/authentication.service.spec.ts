import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AmplifyService } from 'aws-amplify-angular';
import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthenticationService, AmplifyService]
    });
  });

  // testing services
  it('should be created', inject(
    [AuthenticationService, AmplifyService],
    (
      authenticationService: AuthenticationService,
      amplifyService: AmplifyService
    ) => {
      expect(authenticationService).toBeTruthy();
      expect(amplifyService).toBeTruthy();
    }
  ));

  // testing methods
  it('has working methods', inject(
    [AuthenticationService, AmplifyService],
    (
      authenticationService: AuthenticationService,
      amplifyService: AmplifyService
    ) => {
      expect(authenticationService.canActivate).toBeTruthy();
      expect(authenticationService.isLoggedIn).toBeTruthy();
      expect(authenticationService.login).toBeTruthy();
      expect(authenticationService.logout).toBeTruthy();
    }
  ));
});
