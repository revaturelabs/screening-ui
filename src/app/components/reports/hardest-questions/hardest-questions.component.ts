import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hardest-questions',
  templateUrl: './hardest-questions.component.html',
  styleUrls: ['./hardest-questions.component.css']
})
export class HardestQuestionsComponent implements OnInit {
  hardestQuestions: string[] = [];
  constructor() { }

  ngOnInit() {
  }

}
