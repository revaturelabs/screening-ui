import { TestBed } from '@angular/core/testing';
import { UrlService } from '../urls/url.service';
import { HttpClientModule } from '@angular/common/http';

import { SimpleReportService } from './simple-report.service';

describe('SimpleReportService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [],
      providers: [UrlService]
    })
  );

  it('should be created', () => {
    const service: SimpleReportService = TestBed.get(SimpleReportService);
    expect(service).toBeTruthy();
  });
});
