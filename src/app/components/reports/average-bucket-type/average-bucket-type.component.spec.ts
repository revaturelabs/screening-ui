import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageBucketTypeComponent } from './average-bucket-type.component';
import { ReportService } from 'src/app/services/reports/report.service';
//import { RouterTestingModule } from '@angular/router/testing';

import * as Highcharts from 'highcharts';

describe('AverageBucketTypeComponent', () => {
  let component: AverageBucketTypeComponent;
  let fixture: ComponentFixture<AverageBucketTypeComponent>;
let mockReportService: ReportService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ Highcharts],
      declarations: [ AverageBucketTypeComponent ],
providers: [ReportService]
    })
    fixture = TestBed.createComponent(AverageBucketTypeComponent);
    component = fixture.componentInstance;
    mockReportService =TestBed.get(ReportService);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
