import { TestBed, inject } from '@angular/core/testing';

import { SkillTypesService } from './skill-types.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UrlService } from '../urls/url.service';

describe('SkillTypesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkillTypesService, HttpClient, HttpHandler, UrlService]
    });
  });

  it('should be created', inject([SkillTypesService], (service: SkillTypesService) => {
    expect(service).toBeTruthy();
  }));
});
