import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterReportComponent } from './master-report.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReportSidebarComponent } from '../report-sidebar/report-sidebar.component';
import { AverageBucketTypeComponent } from '../average-bucket-type/average-bucket-type.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ; 
import { AverageSkillComponent } from '../average-skill/average-skill.component';
import { FormsModule } from '@angular/forms';
import { HighchartsChartModule } from 'highcharts-angular';
import { UrlService } from 'src/app/services/urls/url.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

describe('MasterReportComponent', () => {
  let component: MasterReportComponent;
  let fixture: ComponentFixture<MasterReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,NgbModule,FormsModule,HighchartsChartModule,HttpModule,HttpClientModule],
      declarations: [ MasterReportComponent,ReportSidebarComponent, AverageBucketTypeComponent,AverageSkillComponent],
      providers:[UrlService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
