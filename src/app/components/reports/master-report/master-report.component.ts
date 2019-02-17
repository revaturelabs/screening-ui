import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/reports/report.service';
import { ReportData } from 'src/app/entities/ReportData';

@Component({
  selector: 'app-master-report',
  templateUrl: './master-report.component.html',
  styleUrls: ['./master-report.component.css']
})
export class MasterReportComponent implements OnInit {
  reportData: ReportData;
  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.reportService.getAllScreenerDataByWeeks(1)
      .subscribe(data => this.reportData = data);
  }

}
