import { TestBed, inject } from '@angular/core/testing';
import { Category } from '../../entities/Category';
import { UrlService } from '../urls/url.service';
import { SkillTypesService } from './skill-types.service';
import {HttpClientModule} from '@angular/common/http';


describe('SkillTypesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [SkillTypesService, UrlService, Category]
    });
  });

  it('should be created', inject([SkillTypesService], (service: SkillTypesService) => {
    expect(service).toBeTruthy();
  }));
});
