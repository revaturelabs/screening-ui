import { TestBed, inject } from '@angular/core/testing';

import { SkillTypeService } from './skill-type.service';

describe('SkillTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkillTypeService]
    });
  });

  it('should be created', inject([SkillTypeService], (service: SkillTypeService) => {
    expect(service).toBeTruthy();
  }));
});
