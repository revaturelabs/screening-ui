import { TestBed, inject } from '@angular/core/testing';

import { SkillTypeBucketService } from './skill-type-bucket.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UrlService } from '../urls/url.service';

describe('SkillTypeBucketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkillTypeBucketService, HttpClient, HttpHandler, UrlService]
    });
  });

  it('should be created', inject([SkillTypeBucketService], (service: SkillTypeBucketService) => {
    expect(service).toBeTruthy();
  }));
});
