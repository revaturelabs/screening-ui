import { TestBed, inject } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import { ScheduleScreeningService } from './schedule-screening.service';
import { UrlService } from '../urls/url.service';
import { SkillTypesService } from '../../services/skill-types/skill-types.service';

describe('ScheduleScreeningService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      providers: [ScheduleScreeningService, UrlService, SkillTypesService]
    });
  });

  it('should be created', inject([ScheduleScreeningService], (service: ScheduleScreeningService) => {
    expect(service).toBeTruthy();
  }));
});
