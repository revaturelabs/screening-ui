import { TestBed, inject } from '@angular/core/testing';

import { RoleGuard } from './role-guard';
import { Dependencies } from './caliber.test.module';

describe('RoleGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(Dependencies);
  });

  it('should be created', inject([RoleGuard], (service: RoleGuard) => {
    expect(service).toBeTruthy();
  }));
});
