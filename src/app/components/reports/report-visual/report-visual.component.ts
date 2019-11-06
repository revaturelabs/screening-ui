import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { SimpleReportService } from 'src/app/services/reports/simple-report.service';
import * as moment from 'moment';


@Component({
  selector: 'app-report-visual',
  templateUrl: './report-visual.component.html',
  styleUrls: ['./report-visual.component.css']
})
export class ReportVisualComponent implements OnInit {
  description: any;


  constructor(
    public dialogRef: MatDialogRef<ReportVisualComponent>,
    public simpleReportService: SimpleReportService,

    /*
    *injects data into descripition
    *for one way databinding
    */
    @Inject(MAT_DIALOG_DATA) data) {
    //formats data into more human readable
    data.srm.screenDate = moment(data.srm.screenDate).format('MM-DD-YYYY');
    //console.log(data.srm.screenDate);
    this.description = data;
  }

  //loads the data into report
  ngOnInit() {

  }

  // closes the popout by botton click
  onClose() {
    this.dialogRef.close();
  }

}
