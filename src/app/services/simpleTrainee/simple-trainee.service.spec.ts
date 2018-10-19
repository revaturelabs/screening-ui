import { TestBed, inject } from '@angular/core/testing';

import { SimpleTraineeService } from './simple-trainee.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UrlService } from '../urls/url.service';
import { SkillTypesService } from '../skill-types/skill-types.service';

describe('SimpleTraineeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimpleTraineeService, HttpClient, HttpHandler, UrlService, SkillTypesService]
    });
  });

  it('should be created', inject([SimpleTraineeService], (service: SimpleTraineeService) => {
    expect(service).toBeTruthy();
  }));
});
