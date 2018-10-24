import { TestBed, inject } from '@angular/core/testing';

import { ScheduleScreeningService } from './schedule-screening.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { SkillTypesService } from '../skill-types/skill-types.service';
import { UrlService } from '../urls/url.service';

describe('ScheduleScreeningService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScheduleScreeningService, HttpClient, HttpHandler, SkillTypesService, UrlService]
    });
  });

  it('should be created', inject([ScheduleScreeningService], (service: ScheduleScreeningService) => {
    expect(service).toBeTruthy();
  }));
});
