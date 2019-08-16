import { TestBed, inject } from '@angular/core/testing';

import { RoleGuard } from './role-guard';

describe('RoleGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleGuard]
    });
  });

  it('should be created', inject([RoleGuard], (service: RoleGuard) => {
    expect(service).toBeTruthy();
  }));
});
