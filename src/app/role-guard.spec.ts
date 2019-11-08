import { TestBed, inject } from '@angular/core/testing';

import { RoleGuard } from './role-guard';
import { CookieService } from 'ngx-cookie-service';

describe('RoleGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleGuard, CookieService]
    });
  });

  it('should be created', inject([RoleGuard], (service: RoleGuard) => {
    expect(service).toBeTruthy();
  }));
});
