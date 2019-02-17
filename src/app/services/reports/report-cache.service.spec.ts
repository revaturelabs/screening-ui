import { TestBed } from '@angular/core/testing';

import { ReportCacheService } from './report-cache.service';

describe('ReportCacheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportCacheService = TestBed.get(ReportCacheService);
    expect(service).toBeTruthy();
  });
});
