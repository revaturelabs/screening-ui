import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hardest-questions',
  templateUrl: './hardest-questions.component.html',
  styleUrls: ['./hardest-questions.component.css']
})
export class HardestQuestionsComponent implements OnInit {
  @Input() hardestQuestions: string[] = [
    "What are the sublanguages of SQL?",
    "What are the primary JDBC interfaces?",
    "What is the difference between statements and prepared statements and why would we prefer one over the other?",
    "What values are falsey in JavaScript?",
    "What is SOAP?"
   ];
  constructor() { }

  ngOnInit() {
  }

}
