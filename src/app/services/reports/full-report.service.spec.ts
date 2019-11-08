import { TestBed } from "@angular/core/testing";

import { FullReportService } from "./full-report.service";

describe("FullReportService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: FullReportService = TestBed.get(FullReportService);
    expect(service).toBeTruthy();
  });
});
