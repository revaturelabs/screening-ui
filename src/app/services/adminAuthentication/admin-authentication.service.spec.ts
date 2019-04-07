import { TestBed } from '@angular/core/testing';

import { AdminAuthenticationService } from './admin-authentication.service';

describe('AdminAuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminAuthenticationService = TestBed.get(AdminAuthenticationService);
    expect(service).toBeTruthy();
  });
});
