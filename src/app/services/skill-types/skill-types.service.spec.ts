import { TestBed, inject } from '@angular/core/testing';

import { SkillTypesService } from './skill-types.service';

describe('SkillTypesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkillTypesService]
    });
  });

  it('should be created', inject([SkillTypesService], (service: SkillTypesService) => {
    expect(service).toBeTruthy();
  }));
});
