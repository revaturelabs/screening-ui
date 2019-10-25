import { TestBed, inject } from '@angular/core/testing';

import { SkillTypeBucketService } from './skill-type-bucket.service';
import { Dependencies } from '../../screenforce.test.module';

describe('SkillTypeBucketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(Dependencies);
  });

  it('should be created', inject([SkillTypeBucketService], (service: SkillTypeBucketService) => {
    expect(service).toBeTruthy();
  }));
});

