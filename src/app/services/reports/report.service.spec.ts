import { TestBed } from '@angular/core/testing';

import { ReportService } from './report.service';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../urls/url.service';

// Screening Report Service must be running for these tests to pass.
describe('ReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [UrlService, HttpClient]
  }));

  it('should be created', () => {
    const service: ReportService = TestBed.get(ReportService);
    expect(service).toBeTruthy();
  });
});
