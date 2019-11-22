import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Question } from '../../entities/Question';
import { Category } from '../../entities/Category';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionsService } from '../../services/questions/questions.service';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/animations';
import { CategoriesService } from '../../services/categories/categories.service';
import { AlertsService } from '../../services/alert-service/alerts.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  animations: [
    trigger('move', [
      state(
        'center',
        style({
          transform: 'translateX(0) scaleX(1)'
        })
      ),
      state(
        'left',
        style({
          transform: 'translateX(-28%) scaleX(1)'
        })
      ),
      transition('center =>left', animate('300ms ease-in'))
    ])
  ]
})

/**
 * unified create and update question so that it sends the
 * same objects
 *
 * @author Alex Pich | 1803-USF-MAR26 | Wezley Singleton
 *
 * @author Danny S Chhun | 1803-USF-MAR26 | Wezley Singleton
 *
 * @author Michael Adedigba | 1803-USF-MAR26 | Wezley Singleton
 *
 * @author Pedro De Los Reyes | 1803-USF-MAR26 | Wezley Singleton
 */
export class QuestionComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private questionService: QuestionsService,
    private categoryService: CategoriesService,
    private alertsService: AlertsService
  ) {}

  createQuestion: FormGroup;
  newQuestion: Question;
  question: Question;
  sampleAnswer: string;
  questions: Question[];
  currentCategory: Category;
  public answersCollapsed = true;
  public tagsCollapsed = true;

  ngOnInit() {
    this.currentCategory = this.categoryService.getCurrentCategory();
    this.question = new Question();
    this.updateQuestions();
  }

  /**
   * Used to open a bootstrap modal
   * Takes in the Id of the modal and launches it
   **/
  open(content) {
    this.modalService.open(content, { windowClass: 'fixed-modal' });
  }

  /**
   * Used to validate the create/update question form
   **/
  initFormControl() {
    this.createQuestion = this.fb.group({
      name: ['', Validators.required]
    });
  }

  /**
   * A currently unused function that will give the reason for a modal closing
   * May be used later for giving different results based on how a modal is closed
   **/
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  /**
   * Switches the question sent in as an argument from active to deactive
   * or from deactive to active based on its current status
   **/
  changeQuestionStatus(question) {
    if (question.isActive) {
      question.isActive = false;
      this.questionService.deactivateQuestion(question).subscribe(question => {
        this.updateQuestions();
      });
    } else {
      question.isActive = true;
      this.questionService.activateQuestion(question).subscribe(question => {
        this.updateQuestions();
      });
    }
  }

  /**
   * A simple function that nullifies the currently selected question to
   * be used primarily after a successful save
   **/
  setQuestionNull() {
    this.question = new Question();
    this.sampleAnswer = '';
  }

  /**
   * Set the required fields of the selected
   * function to edit to help the  add new question function decide
   * whether to add or update a question and to fill in the fields
   * with the selected questions sample answers and question text
   **/
  editQuestion(question) {
    this.question = question;
    this.sampleAnswer = question.sampleAnswer;
  }

  /**
   * This function will check to see if all of the fields are filled
   * and to see if the question has an Id already to decide whether
   * to alert the user, add a new question, or to update a current
   * question.
   **/
  addNewQuestion() {
    if (this.question.questionText) {
      if (this.question.questionId) {
        this.question.sampleAnswer = this.sampleAnswer;
        this.question.category = this.currentCategory;

        this.questionService.updateQuestion(this.question).subscribe();

        this.updatedSuccessfully();
      } else {
        this.question.sampleAnswer = this.sampleAnswer;
        this.question.category = this.currentCategory;
        this.questionService.createNewQuestion(this.question).subscribe();
        this.savedSuccessfully();
      }
      this.updateQuestions();
      this.setQuestionNull();
      this.sampleAnswer = '';
    } else {
      this.savedUnsuccessfull();
    }
  }

  /**
   * Used to populate the current question and the current tags with a selected question to be
   * edited.
   **/
  updateQuestions() {
    if (this.currentCategory) {
      this.questionService
        .getCategoryQuestions(this.currentCategory.categoryId)
        .subscribe(data => {
          this.questions = data;
          this.questions.sort(this.compare);
          this.questions.sort(this.compare2);
        });
    }
  }

  /** used to compare questions Array to sort it based on status */
  compare(a: Question, b: Question) {
    if (a.isActive) {
      return -1;
    } else {
      return 1;
    }
  }

  compare2(a: Question, b: Question) {
    if (
      a.isActive &&
      a.questionText.toLocaleLowerCase() < b.questionText.toLocaleLowerCase()
    ) {
      return -1;
    } else {
      return 1;
    }
  }

  savedSuccessfully() {
    this.alertsService.success('Saved successfully');
  }
  updatedSuccessfully() {
    this.alertsService.success('Updated successfully');
  }
  savedUnsuccessfull() {
    this.alertsService.error('All Fields Must be Filled');
  }
}
