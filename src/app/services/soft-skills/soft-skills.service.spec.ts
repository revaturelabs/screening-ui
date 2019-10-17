import { TestBed, inject } from '@angular/core/testing';

import { SoftSkillsService } from './soft-skills.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UrlService } from '../urls/url.service';

describe('SoftSkillsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SoftSkillsService, HttpClient, HttpHandler, UrlService]
    });
  });

  it('should be created', inject([SoftSkillsService], (service: SoftSkillsService) => {
    expect(service).toBeTruthy();
  }));
});
