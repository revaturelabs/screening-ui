import { TestBed } from '@angular/core/testing';

import { SimpleReportService } from './simple-report.service';

describe('SimpleReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleReportService = TestBed.get(SimpleReportService);
    expect(service).toBeTruthy();
  });
});
