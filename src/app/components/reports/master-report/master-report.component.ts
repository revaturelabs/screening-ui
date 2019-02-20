import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/reports/report.service';
import { ReportData } from 'src/app/entities/ReportData';
import { ReportCacheService } from 'src/app/services/reports/report-cache.service';

@Component({
  selector: 'app-master-report',
  templateUrl: './master-report.component.html',
  styleUrls: ['./master-report.component.css']
})
export class MasterReportComponent implements OnInit {
  reportData: ReportData;
  currentSearchTerm: string = '';
  currentWeekValue: number = 1;
  constructor(
    private reportService: ReportService,
    private reportCache: ReportCacheService) { }
  
  ngOnInit() {
    this.reportCache.getAllScreenerDataByWeeks(1)
      .subscribe(data => this.handleNewReportData(data));
  }
  handleNewReportData(data: ReportData) {
    //console.log(data);
    this.reportData = data;
  }

  onSliderChange(weeks: number) {
    //console.log('slider change: ' + weeks);
    if (weeks != this.currentWeekValue) {
      this.currentWeekValue = weeks;
      this.updateReportData();
    }    
  }
  onSearchChange(newTerm: string) {
    //console.log('search change: ' + newTerm)
    if (this.currentSearchTerm != newTerm) {
      this.currentSearchTerm = newTerm;
      this.updateReportData();
    }
  }
  updateReportData() {
    //console.log('weeks: ' + this.currentWeekValue + ', search: ' + this.currentSearchTerm);
    if (this.currentSearchTerm === '') {
      this.reportCache.getAllScreenerDataByWeeks(this.currentWeekValue)
        .subscribe(data => this.handleNewReportData(data));
    }
    else {
      this.reportCache.getScreenerDataByWeeks(this.currentWeekValue, this.currentSearchTerm)
      .subscribe(data => this.handleNewReportData(data));
    }
  }

}
