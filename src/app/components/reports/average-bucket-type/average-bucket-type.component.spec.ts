import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AverageBucketTypeComponent } from "./average-bucket-type.component";
import { ReportService } from "../../../services/reports/report.service";
import { RouterTestingModule } from "@angular/router/testing";

import { HighchartsChartModule } from "highcharts-angular";
import { UrlService } from "../../../services/urls/url.service";
import { HttpClientModule } from "@angular/common/http";

describe("AverageBucketTypeComponent", () => {
  let component: AverageBucketTypeComponent;
  let fixture: ComponentFixture<AverageBucketTypeComponent>;
  let mockReportService: ReportService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HighchartsChartModule, HttpClientModule],
      declarations: [AverageBucketTypeComponent],
      providers: [ReportService, UrlService]
    });
    fixture = TestBed.createComponent(AverageBucketTypeComponent);
    component = fixture.componentInstance;
    mockReportService = TestBed.get(ReportService);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
