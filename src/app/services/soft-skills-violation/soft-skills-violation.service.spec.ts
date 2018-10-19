import { TestBed, inject } from '@angular/core/testing';

import { SoftSkillsViolationService } from './soft-skills-violation.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UrlService } from '../urls/url.service';

describe('SoftSkillsViolationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SoftSkillsViolationService, HttpClient, HttpHandler, UrlService]
    });
  });

  it('should be created', inject([SoftSkillsViolationService], (service: SoftSkillsViolationService) => {
    expect(service).toBeTruthy();
  }));
});
