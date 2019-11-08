import { TestBed, inject } from '@angular/core/testing';
import { Bucket } from '../../entities/Bucket';
import { UrlService } from '../urls/url.service';
import { SkillTypesService } from './skill-types.service';
import { HttpClientModule } from '@angular/common/http';

describe('SkillTypesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [SkillTypesService, UrlService, Bucket],
    });
  });

  it('should be created', inject(
    [SkillTypesService],
    (service: SkillTypesService) => {
      expect(service).toBeTruthy();
    }
  ));
});
