import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MasterReportComponent } from "./master-report.component";
import { RouterTestingModule } from "@angular/router/testing";
import { ReportSidebarComponent } from "../report-sidebar/report-sidebar.component";
import { AverageCategoryTypeComponent } from "../average-category-type/average-category-type.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AverageTrackComponent } from "../average-track/average-track.component";
import { FormsModule } from "@angular/forms";
import { HighchartsChartModule } from "highcharts-angular";
import { UrlService } from "src/app/services/urls/url.service";
import { HttpClientModule } from "@angular/common/http";

describe("MasterReportComponent", () => {
  let component: MasterReportComponent;
  let fixture: ComponentFixture<MasterReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgbModule,
        FormsModule,
        HighchartsChartModule,
        HttpClientModule
      ],
      declarations: [
        MasterReportComponent,
        ReportSidebarComponent,
        AverageCategoryTypeComponent,
        AverageTrackComponent
      ],
      providers: [UrlService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
