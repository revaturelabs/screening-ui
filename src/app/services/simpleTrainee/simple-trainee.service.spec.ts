import { TestBed, inject } from '@angular/core/testing';

import { SimpleTraineeService } from './simple-trainee.service';
import { SkillTypesService } from '../skill-types/skill-types.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UrlService } from '../urls/url.service';

describe('SimpleTraineeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimpleTraineeService, SkillTypesService, HttpClient, HttpHandler, UrlService]
    });
  });

  it('should be created', inject([SimpleTraineeService], (service: SimpleTraineeService) => {
    expect(service).toBeTruthy();
  }));
});
