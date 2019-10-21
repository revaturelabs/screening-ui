import { TestBed, inject } from '@angular/core/testing';

import { SoftSkillsViolationService } from './soft-skills-violation.service';
import { Dependencies } from 'src/app/caliber.test.module';

describe('SoftSkillsViolationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(Dependencies);
  });

  it('should be created', inject([SoftSkillsViolationService], (service: SoftSkillsViolationService) => {
    expect(service).toBeTruthy();
  }));
});
