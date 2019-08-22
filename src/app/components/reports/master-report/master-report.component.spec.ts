import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterReportComponent } from './master-report.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReportSidebarComponent } from '../report-sidebar/report-sidebar.component';

describe('MasterReportComponent', () => {
  let component: MasterReportComponent;
  let fixture: ComponentFixture<MasterReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReportSidebarComponent],
      declarations: [ MasterReportComponent ]
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
