import { TestBed, inject } from '@angular/core/testing';

import { SoftSkillsService } from './soft-skills.service';
import { Dependencies } from '../../screenforce.test.module';

describe('SoftSkillsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(Dependencies);
  });

  it('should be created', inject([SoftSkillsService], (service: SoftSkillsService) => {
    expect(service).toBeTruthy();
  }));
});
