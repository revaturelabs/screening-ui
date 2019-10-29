import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/reports/report.service';
import { ReportData } from 'src/app/entities/ReportData';
import { ReportCacheService } from 'src/app/services/reports/report-cache.service';
import { FullReportService } from 'src/app/services/reports/full-report.service';

@Component({
  selector: 'app-master-report',
  templateUrl: './master-report.component.html',
  styleUrls: ['./master-report.component.css']
})
export class MasterReportComponent implements OnInit {


  constructor(public fullReportService: FullReportService) { }

  ngOnInit() {
    this.fullReportService.getAllSimpleReports().subscribe((data)=>{
      console.log(data);
    });
  }

}
