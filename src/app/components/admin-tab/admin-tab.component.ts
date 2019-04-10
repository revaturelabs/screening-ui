import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormsModule} from '@angular/forms';



@Component({
  
  selector: 'app-admin-tab',
  templateUrl: './admin-tab.component.html',
  styleUrls: ['./admin-tab.component.css']
})
export class AdminTabComponent implements OnInit {
  @ViewChild('createQuestionForm') formValues;
  notifier: string;
  //public items:Array<string> =['Java Applied','Hibernate','SQL','Angular','Spring AoP','JavaScript','Java Concepts','SOAP','JDBC','JDBC']
  constructor(private http: HttpClient) { }
   bucket: string = "SQL";
   text: string;
   answer1: string;
   answer2: string;
   answer3: string;
   answer4: string;
   answer5: string;
  
  ngOnInit() {
  }

  submitForm(form: NgForm) {
 
    this.notifier = "Your Question was created!";
    this.formValues.resetForm();
    let send = JSON.parse(JSON.stringify({}));
    send.isActive = false;
    send.questionId = 0;
    send.questionScores = null;
    send.bucket = this.getBucketId(this.bucket);
    send.questionText = this.text;
    send.sampleAnswer1 = this.answer1;
    send.sampleAnswer2 = this.answer2;
    send.sampleAnswer3 = this.answer3;
    send.sampleAnswer4 = this.answer4;
    send.sampleAnswer5 = this.answer5;
  
    console.group(JSON.stringify(send));
    this.http.post(`http://localhost:8185/question`,JSON.stringify(send)).subscribe();
    
    this.text = '';
    this.answer1 = '';
    this.answer2 = '';
    this.answer3 = '';
    this.answer4 = '';
    this.answer5 = '';
    
  }
  getBucketId(input:String) :number {
    switch (input){
      case 'Java Applied': return 404;
      case 'Hibernate': return 407;
      case 'SQL': return 406;
      case 'Angular': return 410;
      case 'Spring AoP': return 411;
      case 'JavaScript': return 412;
      case 'Java Concepts': return 413;
      case 'SOAP': return 414;
      case 'JDBC': return 415;
      case 'REST': return 416;
      default: return 0;
    }
  }
}
