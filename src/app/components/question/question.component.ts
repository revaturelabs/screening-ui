import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Question } from '../../entities/Question';
import { Bucket } from '../../entities/Bucket';
// import { Tag } from '../entities/Tag';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionsService } from '../../services/questions/questions.service';
// import { TagsService } from '../../services/tags.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { BucketsService } from '../../services/buckets/buckets.service';
import { AlertsService } from '../../services/alert-service/alerts.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  animations: [
    trigger('move', [
      state('center', style({
        transform: 'translateX(0) scaleX(1)'
      })),
      state('left', style({
        transform: 'translateX(-28%) scaleX(1)'
      })),
      transition('center =>left', animate('300ms ease-in')),
    ]),
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

  constructor(private modalService: NgbModal, private fb: FormBuilder,
    // private tagsService: TagsService,
    private questionService: QuestionsService,
    private bucketService: BucketsService,
    private alertsService: AlertsService) { }

  newTagString: string;
  createQuestion: FormGroup;
  newQuestion: Question;
  // newTags: Tag[];
  // allTags: Tag[];
  // currentTags: Tag[];
  question: Question;
  sampleAnswers: string[];
  questions: Question[];
  // filter: Tag = new Tag();
  currentBucket: Bucket;
  public answersCollapsed = true;
  public tagsCollapsed = true;
  state;
  allBuckets = Array<Bucket>();

  ngOnInit() {
    this.currentBucket = this.bucketService.getCurrentBucket();
    // this.currentTags = [];
    this.question = new Question();
    this.sampleAnswers = [this.question.sampleAnswer1];
    this.sampleAnswers.push(this.question.sampleAnswer2);
    this.sampleAnswers.push(this.question.sampleAnswer3);
    this.sampleAnswers.push(this.question.sampleAnswer4);
    this.sampleAnswers.push(this.question.sampleAnswer5);
    this.updateQuestions();
    // this.bucketService.getAllBuckets().subscribe(buckets => this.allBuckets = buckets);
    this.bucketService.getAllBuckets().subscribe(buckets => this.allBuckets.push(... buckets as Bucket[]));
    console.log(this.allBuckets);
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
      'name': ['', Validators.required],
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
   * or from deactive to active based on it's current status
   **/
  changeQuestionStatus(question) {
    if (question.isActive) {
      question.isActive = false;
      this.questionService.deactivateQuestion(question.questionId).subscribe();
    } else {
      question.isActive = true;
      this.questionService.activateQuestion(question.questionId).subscribe();
    }
  }

  /**
   * A simple function that nullifies the currently selected question to
   * be used primarily after a successful save
   **/
  setQuestionNull() {
    this.question = new Question();
    this.sampleAnswers = [];
    // this.currentTags = [];
  }

  /**
   * Sets the required fields of the selected
   * function to edit to help the  add new question function decide
   * whether to add or update a question and to fill in the fields
   * with the selected question's sample answers and question text
   **/
  editQuestion(question) {
    this.question = question;
    this.sampleAnswers = [this.question.sampleAnswer1];
    this.sampleAnswers.push(this.question.sampleAnswer2);
    this.sampleAnswers.push(this.question.sampleAnswer3);
    this.sampleAnswers.push(this.question.sampleAnswer4);
    this.sampleAnswers.push(this.question.sampleAnswer5);
    // const newTags = [];
    // this.tagsService.getAllTags().subscribe(data => {
    //   this.allTags = (data as Tag[]);
    // });
    // this.tagsService.getTagByQuestion(this.question.questionId).subscribe(data => {
    //   this.newTags = (data as Tag[]);
    //   this.removeTagsFromAll();
    // });
  }
  setBucket(question: Question, bucket: Bucket) {
    this.questionService.updateQuestion(this.question);
  }

  /**
   * This function will take the string in the new tag input field
   * and create a new tag with no Id, then get the same tag with a valid
   * Id from the tag service
   **/
  // newTag() {
  //   let newTag: Tag = new Tag();
  //   newTag.tagName = this.newTagString;
  //   if (this.newTagString) {
  //     this.tagsService.createNewTag(this.newTagString).subscribe(data => {
  //       newTag = (data as Tag);
  //       this.currentTags.push(newTag);
  //     });
  //     this.newTagString = '';
  //   }
  // }

  /**
   * Converts the currently added Tag array into an array of tag ids for
   * saving and updating.
   **/
  // getTagIds() {
  //   const tagIds: number[] = [];
  //   let i = 0;
  //
  //   for (i; i < this.currentTags.length; i++) {
  //     tagIds[i] = this.currentTags[i].tagId;
  //   }
  //   return tagIds;
  // }

  /**
   * This function will check to see if all of the fields are filled
   * and to see if the question has an Id already to decide whether
   * to alert the user, add a new question, or to update a current
   * question.
   *
   * incharge of updating and adding new question probably needs to be
   * refactored poorly written by creators from hydra. Future sprint
   * please refactor to seperate into two diffrent methods.
   *
   * Last Modifed to set the bucketId in the question model
   * so that it did not need to be passed individually to the question
   * service.
   *
   * @author Alex Pich | 1803-USF-MAR26 | Wezley Singleton
   *
   * @author Danny S Chhun | 1803-USF-MAR26 | Wezley Singleton
   *
   * @author Michael Adedigba | 1803-USF-MAR26 | Wezley Singleton
   *
   * @author Pedro De Los Reyes | 1803-USF-MAR26 | Wezley Singleton
   *
   **/
  addNewQuestion() {
    if (this.sampleAnswers.length === 5 && this.question.questionText) {
      if (this.question.questionId) {
        this.question.sampleAnswer1 = this.sampleAnswers[0];
        this.question.sampleAnswer2 = this.sampleAnswers[1];
        this.question.sampleAnswer3 = this.sampleAnswers[2];
        this.question.sampleAnswer4 = this.sampleAnswers[3];
        this.question.sampleAnswer5 = this.sampleAnswers[4];
        this.questionService.updateQuestion(this.question).subscribe(data => {
          this.updateQuestions();
        });
        this.updatedSuccessfully();
      } else {
        this.question.sampleAnswer1 = this.sampleAnswers[0];
        this.question.sampleAnswer2 = this.sampleAnswers[1];
        this.question.sampleAnswer3 = this.sampleAnswers[2];
        this.question.sampleAnswer4 = this.sampleAnswers[3];
        this.question.sampleAnswer5 = this.sampleAnswers[4];
        this.question.bucket = this.currentBucket;
        this.questionService.createNewQuestion(this.question).subscribe(data => {
          this.updateQuestions();
        });
        this.savedSuccessfully();
      }
      this.setQuestionNull();
      this.sampleAnswers = [];
    } else {
      this.savedUnsuccessfull();
    }
  }

  /**
   * Adds the selected tag to the current tags array and removes it from the all tags array.
   **/
  // addTagToQuestion(tag) {
  //   let currentTag: any;
  //   const newAllTags: Tag[] = [];
  //   let i = 0;
  //
  //   for (i; i < this.allTags.length; i++) {
  //     currentTag = this.allTags[i];
  //     if (tag && currentTag) {
  //       if (tag.tagId !== currentTag.tagId) {
  //         newAllTags.push(currentTag);
  //       }
  //     }
  //   }
  //   this.allTags = newAllTags;
  //   this.currentTags.push(tag);
  // }

  /**
   * Adds the selected tag to the all tags array and removes it from the current tags array
   **/

  /**
   * Resets the current tags and then re adds the tags specific to the current question.
   * Used to update a question by populating the current tags with the tags currently
   * associated with that question.
   **/
  // removeTagsFromAll() {
  //   let i = 0;
  //   this.currentTags = [];
  //   for (i; i < this.newTags.length; i++) {
  //     this.addTagToQuestion(this.newTags[i]);
  //   }
  // }

  /**
   * Used to populate the current question and the current tags with a selected question to be
   * edited.
   **/
  updateQuestions() {
    if (this.currentBucket) {
      this.questionService.getBucketQuestions(this.currentBucket.bucketId).subscribe(data => {
        this.questions = (data as Question[]);
      });
      // this.tagsService.getAllTags().subscribe(data => {
      //   this.allTags = (data as Tag[]);
      // });
    }
  }

  // addNewTag(newTag: Tag) {
  //   this.currentTags.push(newTag);
  // }

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
