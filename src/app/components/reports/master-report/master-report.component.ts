import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/reports/report.service';
import { ReportData } from 'src/app/entities/ReportData';
import { ReportCacheService } from 'src/app/services/reports/report-cache.service';
import { SimpleReportService } from 'src/app/services/reports/simple-report.service';

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




  constructor(
  public fullReportService: SimpleReportService,
    private reportService: ReportService,
    private reportCache: ReportCacheService,

 private dialog: MatDialog

) { }



  ngOnInit() {
    this.fullReportService.getAllSimpleReports().subscribe((data)=>{
      console.log(data);
    });
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

