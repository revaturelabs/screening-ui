import { Component, OnInit } from "@angular/core";
import { ReportService } from "src/app/services/reports/report.service";
import { ReportData } from "src/app/entities/ReportData";
import { ReportCacheService } from "src/app/services/reports/report-cache.service";
import { SimpleReportService } from "src/app/services/reports/simple-report.service";

@Component({
  selector: "app-master-report",
  templateUrl: "./master-report.component.html",
  styleUrls: ["./master-report.component.css"]
})
export class MasterReportComponent implements OnInit {
  constructor(public simpleReportService: SimpleReportService) {}

  ngOnInit() {
    this.simpleReportService.getAllSimpleReports().subscribe(data => {
      console.log(data);
    });
  }
}
