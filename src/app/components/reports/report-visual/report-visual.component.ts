import { Component, OnInit, Inject } from '@angular/core';
import{ MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { SimpleReportService } from 'src/app/services/reports/simple-report.service';
import  * as moment from 'moment';


@Component({
  selector: 'app-report-visual',
  templateUrl: './report-visual.component.html',
  styleUrls: ['./report-visual.component.css']
})
export class ReportVisualComponent implements OnInit {
  report: any;
  description:any;


  constructor(
    public dialogRef:MatDialogRef<ReportVisualComponent>,
    public simpleReportService: SimpleReportService,
    
    @Inject(MAT_DIALOG_DATA) data) {
      console.log(data);
      data.srm.screenDate = moment(data.srm.screenDate).format('MM-DD-YYYY');
    this.description = data;
  }


  ngOnInit() {
    this.simpleReportService.getAllSimpleReports().subscribe((data) => {
    })
  }
 
  onClose(){
    //this.service.form.reset();
    //this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}
