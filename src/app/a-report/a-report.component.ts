import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import{MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import { isIdentifyLabelsInput } from '@aws-amplify/predictions/lib-esm/types';



@Component({
  selector: 'app-a-report',
  templateUrl: './a-report.component.html',
  styleUrls: ['./a-report.component.css']
})
export class AReportComponent implements OnInit {
  options: FormGroup;
  report: any;
  description= " Question and Score"; 
 

  constructor(fb: FormBuilder, public dialogRef:MatDialogRef<AReportComponent>) {
  
  }
  ngOnInit() {
    this.loadCard();
  }
  
  
  loadCard(){
    myCard.screener="Ilya";
    myCard.score="99%";
    myCard.question= "What is love?";
    this.report=myCard;
    console.log(this.report);
  }
  onClose(){
    //this.service.form.reset();
    //this.service.initializeFormGroup();
    this.dialogRef.close();
  }
  /*
  onSubmit(){
    if(this.service.form.valid){
      this.service.insertCard(this.service.form.valye);
      this.service.form.reset();
      this.service.initializeFormGroup(); 
      this.notificationService.success(':: Submitted successfully');
      this.onClose();
    }
  }
  */
 
}

class myCard{
  public static screener: any; 
  public static score: any;
  public static question: any;
  
}
