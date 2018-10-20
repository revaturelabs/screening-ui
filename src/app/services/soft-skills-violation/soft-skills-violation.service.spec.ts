import { TestBed, inject } from '@angular/core/testing';

import { SoftSkillsViolationService } from './soft-skills-violation.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UrlService } from '../urls/url.service';
import { ScreeningService } from '../../services/screening/screening.service'

describe('SoftSkillsViolationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SoftSkillsViolationService, HttpClient, HttpHandler, UrlService, ScreeningService]
    });
  });

  it('should be created', inject([SoftSkillsViolationService], (service: SoftSkillsViolationService) => {
    expect(service).toBeTruthy();
  }));
});
