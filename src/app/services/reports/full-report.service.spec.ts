import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { UrlService } from '../urls/url.service';
import { FullReportService } from './full-report.service';

describe('FullReportService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [],
      providers: [UrlService]
    })
  );

  it('should be created', () => {
    const service: FullReportService = TestBed.get(FullReportService);
    expect(service).toBeTruthy();
  });
});
