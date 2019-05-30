import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { UrlService } from '../../services/urls/url.service';

import { SkillTypeBucketService } from './skill-type-bucket.service';

describe('SkillTypeBucketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule , HttpClientModule ],

      providers: [SkillTypeBucketService,UrlService]
    });
  });

  it('should be created', inject([SkillTypeBucketService], (service: SkillTypeBucketService) => {
    expect(service).toBeTruthy();
  }));
});

