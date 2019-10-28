import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { UrlService } from '../../services/urls/url.service';

import { SkillTypeCategoryService } from './skill-type-category.service';

describe('SkillTypeCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule , HttpClientModule ],

      providers: [SkillTypeCategoryService, UrlService]
    });
  });

  it('should be created', inject([SkillTypeCategoryService], (service: SkillTypeCategoryService) => {
    expect(service).toBeTruthy();
  }));
});

