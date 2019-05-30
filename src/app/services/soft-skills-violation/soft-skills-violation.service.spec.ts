import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UrlService } from '../../services/urls/url.service';
import { HttpClientModule } from '@angular/common/http';

import { SoftSkillsViolationService } from './soft-skills-violation.service';

describe('SoftSkillsViolationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule , HttpClientModule ],

      providers: [SoftSkillsViolationService,UrlService]
    });
  });

  it('should be created', inject([SoftSkillsViolationService], (service: SoftSkillsViolationService) => {
    expect(service).toBeTruthy();
  }));
});
