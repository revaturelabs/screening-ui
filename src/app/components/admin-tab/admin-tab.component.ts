import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  
  selector: 'app-admin-tab',
  templateUrl: './admin-tab.component.html',
  styleUrls: ['./admin-tab.component.css']
})
export class AdminTabComponent implements OnInit {
  @ViewChild('createQuestionForm') formValues;
  notifier: string;
  //public items:Array<string> =['Java Applied','Hibernate','SQL','Angular','Spring AoP','JavaScript','Java Concepts','SOAP','JDBC','JDBC']
  constructor() { }

  ngOnInit() {
  }

  submitForm(form: NgForm) {
 
    this.notifier = "Your Question was created!";
    this.formValues.resetForm();
  }
}
