import { Component, OnInit, Inject } from '@angular/core';
import{ MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { SimpleReportService } from 'src/app/services/reports/simple-report.service';


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

    this.description = data;
  }


  ngOnInit() {
    console.log(this.description.screeningId);
    this.simpleReportService.getAllSimpleReports().subscribe((data) => {
    this.loadCard();
    })
  }
  loadCard(){

    this.report="myCard";
    console.log(this.report);
  }
  onClose(){
    //this.service.form.reset();
    //this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}
