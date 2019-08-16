import { TestBed, inject } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import { SimpleTrainee } from '../../entities/SimpleTrainee';
import { SkillTypesService } from '../../services/skill-types/skill-types.service';
import { UrlService } from '../urls/url.service';
import { SimpleTraineeService } from './simple-trainee.service';

describe('SimpleTraineeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [SimpleTraineeService, UrlService, SkillTypesService, SimpleTrainee]
    });
  });

  it('should be created', inject([SimpleTraineeService], (service: SimpleTraineeService) => {
    expect(service).toBeTruthy();
  }));
});
