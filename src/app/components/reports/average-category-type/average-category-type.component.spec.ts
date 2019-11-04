import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageCategoryTypeComponent } from './average-category-type.component';
import { ReportService } from '../../../services/reports/report.service';
import { RouterTestingModule } from '@angular/router/testing';

import { HighchartsChartModule } from 'highcharts-angular';
import { UrlService } from '../../../services/urls/url.service';
import { HttpClientModule } from '@angular/common/http';

describe('AverageCategoryTypeComponent', () => {
  let component: AverageCategoryTypeComponent;
  let fixture: ComponentFixture<AverageCategoryTypeComponent>;
  let mockReportService: ReportService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HighchartsChartModule, HttpClientModule],
      declarations: [AverageCategoryTypeComponent],
      providers: [ReportService, UrlService]
    });
    fixture = TestBed.createComponent(AverageCategoryTypeComponent);
    component = fixture.componentInstance;
    mockReportService = TestBed.get(ReportService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
