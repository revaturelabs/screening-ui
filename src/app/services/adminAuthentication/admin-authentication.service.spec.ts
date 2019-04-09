import { TestBed } from '@angular/core/testing';

import { AdminAuthenticationService } from './admin-authentication.service';
import { debug, debuglog } from 'util';
import { AuthenticationService } from '../authentication/authentication.service';
import { HttpClient } from 'selenium-webdriver/http';
import { Router } from '@angular/router';

describe('AdminAuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({providers: [AdminAuthenticationService]}));

  it('should be created', () => {
    const service: AdminAuthenticationService = TestBed.get(AdminAuthenticationService);
    expect(service).toBeTruthy();
  });
  it('should return false', ()=> {
    const service: AdminAuthenticationService = TestBed.get(AdminAuthenticationService);
    
    expect(service.canActivate).toBeFalsy();
  })
  
});
