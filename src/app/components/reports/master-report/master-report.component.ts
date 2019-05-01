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
  currentWeeksValue: Array<number> = [0, 52];

  //Replace this with a function to populate the current dates automatically
  dates: Array<string> = ["2019-01-01","2018-12-25","2018-12-18","2018-12-11","2018-12-04","2018-12-04","2018-11-27","2018-11-20","2018-11-13","2018-11-06","2018-10-30","2018-10-23","2018-10-16",
                          "2018-10-09","2018-10-02","2018-09-25","2018-09-18","2018-09-18","2018-09-11","2018-09-04","2018-08-28","2018-08-21","2018-08-14","2018-08-07","2018-07-31","2018-07-24",
                          "2018-07-17","2018-07-10","2018-07-03","2018-06-26","2018-06-19","2018-06-12","2018-06-05","2018-05-29","2018-05-22","2018-05-15","2018-05-08","2018-05-01","2018-04-24",
                          "2018-04-17","2018-04-10","2018-04-03","2018-03-27","2018-03-20","2018-03-13","2018-03-06","2018-02-27","2018-02-20","2018-02-13","2018-02-06","2018-01-30","2018-01-23"
                          ]
  
  startDate: string = "2015-01-01";
  endDate: string = "2019-01-01";

  constructor(
    private reportService: ReportService,
    private reportCache: ReportCacheService) { }

  ngOnInit() {
    this.reportCache.getAllScreenerDataByWeeks(this.startDate, this.endDate)
      .subscribe(data => this.handleNewReportData(data));

      //populateDates()
  }
  handleNewReportData(data: ReportData) {
    //console.log(data);
    this.reportData = data;
  }

  onSliderChange(weeks: Array<number>) {

    //Weeks is an array that is set by the slider
    //Weeks[0] is the endDate and begins at 0 (which equals 2019-01-01)
    //Weeks[1] is the startDate and ends at 52 (which equals 2018-01-23)...  since 52 weeks is ~1 year
    //the following code converts weeks[0] & [1] to be REAL dates, so that getScreenerDataByWeeks() can function properly

    if (weeks[0] != this.currentWeeksValue[0] || weeks[1] != this.currentWeeksValue[1]) {
      //endDate is closer to the present
      this.endDate = this.dates[weeks[0]];
      //startDate is further in the past
      this.startDate = this.dates[weeks[1]];

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
      this.reportCache.getAllScreenerDataByWeeks(this.startDate, this.endDate)
        .subscribe(data => this.handleNewReportData(data));
    }
    else {
      this.reportCache.getScreenerDataByWeeks(this.startDate, this.endDate, this.currentSearchTerm)
      .subscribe(data => this.handleNewReportData(data));
    }
  }

  populateDate(currentDate, weeksBack){
    //while (n < weeksBack){
      //currDate -= 7 days;
    //}
  //}
}
