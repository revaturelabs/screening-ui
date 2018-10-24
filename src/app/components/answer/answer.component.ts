import { Component, OnInit, Input} from '@angular/core';

// Entities
import { QuestionScore } from '../../entities/QuestionScore';

// Services
import { QuestionsService } from '../../services/questions/questions.service';
import { QuestionScoreService } from '../../services/question-score/question-score.service';

// ngbootstrap for modal
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input() question;
  questionScore: QuestionScore;

  // used to exchange data between the answer modal and question table component
  questionScores: QuestionScore[];

  constructor(public activeModal: NgbActiveModal, private questionScoreService: QuestionScoreService) { }

  ngOnInit() {
      this.questionScore = {
        qSID: null,
        questionId: this.question.questionId,
        screeningID: +localStorage.getItem('screeningID'),
        score: 0,
        commentary: '',
        bucketId: this.question.bucket.bucketId,
        beginTime: new Date()
      };
      // update answeredQuestions array to match our question service's answeredQuestions array.
      this.questionScoreService.currentQuestionScores.subscribe(answeredQuestions => this.questionScores = answeredQuestions);
    
    }
  // when a score is set and submitted, update the array of questions scores
  saveQuestionScore(): void {
      // allow screeners to update the score of a candidate.
      // Need to check if the current array of question scores is not empty
      if (this.questionScores.length > 0 ) {
        // iterate through each question score
        for (const q of this.questionScores) {
          // if the current question score has the same questionID as the selected question
          if (q.questionId === this.questionScore.questionId) {
            // remove that question score.
            this.questionScores.splice(this.questionScores.indexOf(q), 1);
          }
        }
      }
      console.log(this.questionScore);
      // add the new question score to the array of question scores
      this.questionScores.push(this.questionScore);
      // update our services question score array with the array with this components question score array
      this.questionScoreService.updateQuestionScores(this.questionScores);
      // Save the question score to the database.
      this.questionScoreService.postQuestionScore(this.questionScore);
  }
}
