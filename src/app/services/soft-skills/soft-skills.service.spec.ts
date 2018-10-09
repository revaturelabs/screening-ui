import { TestBed, inject } from '@angular/core/testing';

import { SoftSkillsService } from './soft-skills.service';

describe('SoftSkillsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SoftSkillsService]
    });
  });

  it('should be created', inject([SoftSkillsService], (service: SoftSkillsService) => {
    expect(service).toBeTruthy();
  }));
});
