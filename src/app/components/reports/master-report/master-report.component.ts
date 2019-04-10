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
  currentWeeksValue: Array<number> = [1, 208];
  constructor(
    private reportService: ReportService,
    private reportCache: ReportCacheService) { }
  
  ngOnInit() {
    this.reportCache.getAllScreenerDataByWeeks(this.currentWeeksValue)
      .subscribe(data => this.handleNewReportData(data));
  }
  handleNewReportData(data: ReportData) {
    //console.log(data);
    this.reportData = data;
  }

  onSliderChange(weeks: Array<number>) {
    //console.log('slider change: ' + weeks);
    if (weeks[0] != this.currentWeeksValue[0] || weeks[1] != this.currentWeeksValue[1]) {
      this.currentWeeksValue = weeks;
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
    //console.log('weeks: ' + this.currentWeeksValue + ', search: ' + this.currentSearchTerm);
    if (this.currentSearchTerm === '') {
      this.reportCache.getAllScreenerDataByWeeks(this.currentWeeksValue)
        .subscribe(data => this.handleNewReportData(data));
    }
    else {
      this.reportCache.getScreenerDataByWeeks(this.currentWeeksValue, this.currentSearchTerm)
      .subscribe(data => this.handleNewReportData(data));
    }
  }

}
