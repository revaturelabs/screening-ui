import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/reports/report.service';
import { ReportData } from 'src/app/entities/ReportData';
import { ReportCacheService } from 'src/app/services/reports/report-cache.service';

//ILYA//
import{MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { AReportComponent } from 'src/app/a-report/a-report.component';
//ILYA//

@Component({
  selector: 'app-master-report',
  templateUrl: './master-report.component.html',
  styleUrls: ['./master-report.component.css']
})
export class MasterReportComponent implements OnInit {
  reportData: ReportData;
  currentSearchTerm = '';
  currentWeeksValue: Array<number> = [0, 104]; // 104 weeks or ~2 YEARS

  // TODO: Create a function to populate the dates array automatically -- populateDates()
  dates: Array<string> = ['2019-01-01', '2018-12-25', '2018-12-18', '2018-12-11', '2018-12-04', '2018-12-04',
    '2018-11-27', '2018-11-20', '2018-11-13', '2018-11-06', '2018-10-30', '2018-10-23', '2018-10-16',
    '2018-10-09', '2018-10-02', '2018-09-25', '2018-09-18', '2018-09-18', '2018-09-11', '2018-09-04',
    '2018-08-28', '2018-08-21', '2018-08-14', '2018-08-07', '2018-07-31', '2018-07-24', '2018-07-17',
    '2018-07-10', '2018-07-03', '2018-06-26', '2018-06-19', '2018-06-12', '2018-06-05', '2018-05-29',
    '2018-05-22', '2018-05-15', '2018-05-08', '2018-05-01', '2018-04-24', '2018-04-17', '2018-04-10',
    '2018-04-03', '2018-03-27', '2018-03-20', '2018-03-13', '2018-03-06', '2018-02-27', '2018-02-20',
    '2018-02-13', '2018-02-06', '2018-01-30', '2018-01-23', '2018-01-16', '2018-01-09', '2018-01-02',
    '2017-12-26', '2017-12-19', '2017-12-12', '2017-12-05', '2017-11-28', '2017-11-21', '2017-11-14',
    '2017-11-07', '2017-10-31', '2017-10-24', '2017-10-17', '2017-10-10', '2017-10-03', '2017-09-26',
    '2017-09-19', '2017-09-12', '2017-09-05', '2017-08-29', '2017-08-22', '2017-08-15', '2017-08-08',
    '2017-08-01', '2017-07-25', '2017-07-18', '2017-07-11', '2017-07-04', '2017-06-27', '2017-06-20',
    '2017-06-13', '2017-06-06', '2017-05-30', '2017-05-23', '2017-05-16', '2017-05-09', '2017-05-02',
    '2017-04-25', '2017-04-18', '2017-04-11', '2017-04-04', '2017-03-28', '2017-03-21', '2017-03-14',
    '2017-03-07', '2017-02-28', '2017-02-21', '2017-02-14', '2017-02-07', '2017-01-31', '2017-01-24',
    '2017-01-17'];
  startDate = '2017-01-17';
  endDate = '2019-01-01';

  constructor(
    private reportService: ReportService,
    private reportCache: ReportCacheService,
//ILYA//
 private dialog: MatDialog
//ILYA//
) { }

  ngOnInit() {
    this.reportCache.getAllScreenerDataByWeeks(this.startDate, this.endDate)
      .subscribe(data => this.handleNewReportData(data));

      // populateDates();
  }
  handleNewReportData(data: ReportData) {
    this.reportData = data;
  }

  /*
    Weeks is an array that is set by the slider
    Weeks[0] is the endDate and begins at 0 (which equals 2019-01-01)
    Weeks[1] is the startDate and ends at  (which equals 2017-01-17)...  since 104 weeks is ~1 year
    the following code converts weeks[0] & [1] to be REAL dates, so that getScreenerDataByWeeks() can function properly
  */
  onSliderChange(weeks: Array<number>) {
    if (weeks[0] !== this.currentWeeksValue[0] || weeks[1] !== this.currentWeeksValue[1]) {
      // endDate is closer to the present
      this.endDate = this.dates[weeks[0]];
      // startDate is further in the past
      this.startDate = this.dates[weeks[1]];

      this.currentWeeksValue = weeks;
      this.updateReportData();
    }
  }

  onSearchChange(newTerm: string) {
    if (this.currentSearchTerm !== newTerm) {
      this.currentSearchTerm = newTerm;
      this.updateReportData();
    }
  }
  updateReportData() {
    if (this.currentSearchTerm === '') {
      this.reportCache.getAllScreenerDataByWeeks(this.startDate, this.endDate)
        .subscribe(data => this.handleNewReportData(data));
    } else {
      this.reportCache.getScreenerDataByWeeks(this.startDate, this.endDate, this.currentSearchTerm)
      .subscribe(data => this.handleNewReportData(data));
    }
  }

  // TODO: fill the dates Array with real non-hardcoded dates, in string format YYYY-MM-DD
  populateDates() {
    this.dates = [];
  }

  //ILYA//
  report(){
    //this.dialog.open(AReportComponent);
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width="60%";
    dialogConfig.data = {
        id: 1,
        title: 'Angular For Beginners'
    };

    this.dialog.open(AReportComponent, dialogConfig);
  }
  //ILYA//
}

