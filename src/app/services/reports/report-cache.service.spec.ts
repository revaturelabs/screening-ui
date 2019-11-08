import { TestBed } from '@angular/core/testing';

import { ReportCacheService } from './report-cache.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { UrlService } from '../urls/url.service';

describe('ReportCacheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      providers: [UrlService],
    });
  });

  it('should be created', () => {
    const service: ReportCacheService = TestBed.get(ReportCacheService);
    expect(service).toBeTruthy();
  });
});
