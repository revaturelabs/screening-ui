import { TestBed, inject } from '@angular/core/testing';

import { GambitSkillTypeService } from './gambit-skill-type.service';

describe('GambitSkillTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GambitSkillTypeService]
    });
  });

  it('should be created', inject([GambitSkillTypeService], (service: GambitSkillTypeService) => {
    expect(service).toBeTruthy();
  }));
});
