// // Testing modules
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// // Modules
// import { Dependencies } from '../../caliber.test.module';

// // Components
// import { QuestionComponent } from './question.component';

// // Mock Data
// // import { QUESTIONS } from '../../mock-data/mock-questions';
// // import { Question } from '../../entities/Question';

// /**
//  * Test for methods on the question component.
//  *
//  * @author Antonio Marrero Bonilla | 1803-USF-MAR26 | Wezley Singleton
//  *
//  * @author Byron Hall | 1803-USF-MAR26 | Wezley Singleton
//  **/

// /**
//  * Setting up the testing environment for question component.
//  **/
// describe('QuestionComponent', () => {
//   let component: QuestionComponent;
//   let fixture: ComponentFixture<QuestionComponent>;
//   // const t0: Tag = new Tag();
//   // t0.tagId = 1;
//   // t0.tagName = 'Java';
//   // const t1: Tag = new Tag();
//   // t1.tagId = 2;
//   // t1.tagName = 'HTML';

//   /**
//    * Import dependencies and set the TestBed to configure the testing module.
//    **/
//   beforeEach(async(() => {
//     TestBed.configureTestingModule(Dependencies)
//     .compileComponents();
//   }), 1440000);

//   /**
//    * Set up a fixture to use instead of using testbed. This allows us to use
//    * the question component as an instace of the question component for testing.
//    **/
//   beforeEach(() => {
//     fixture = TestBed.createComponent(QuestionComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   /**
//    * Test if the components is created.
//    *
//    * Function tested: None, just check if the component gets created.
//    **/
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   /**
//   * Test if it opens an modal given a modal id.
//   *
//   * Function tested: open()
//   **/
//   it('should open modal-content', () => {
//     const content = document.querySelector('.modal-content');
//     component.open(content);
//     document.querySelector('.modal-content');
//     expect(content).toBeDefined('defined');
//   });

//   /**
//    *  Used to validate the create/update question form.
//    *
//    * Function tested: initFormControl()
//    */
//   it('should create a form group element name', () => {
//     component.initFormControl();
//     component.createQuestion.controls['name'].setValue('test');
//     expect(component.createQuestion.valid).toBeTruthy();
//   });

//   /**
//   * Test if the question status changes from active to deactive.
//   *
//   * Function tested: changeQuestionStatus()
//   **/
//   it('should change question status', () => {
//     component.changeQuestionStatus(QUESTIONS[0]);
//     expect(QUESTIONS[0].isActive).toBe(false);
//     component.changeQuestionStatus(QUESTIONS[0]);
//     expect(QUESTIONS[0].isActive).toBe(true);
//   });

//   /**
//    * Test if the question is set to null after a save.
//    *
//    * Function tested: setQuestionNull()
//    **/
//   it('should set question to null', () => {
//     component.setQuestionNull();
//     expect(component.question).toEqual(new Question());
//     expect(component.sampleAnswers.length).toBe(0);
//     // expect(component.currentTags.length).toBe(0);
//   });

//   // /**
//   //  * Test if the question gets edited or not.
//   //  *
//   //  * Function Tested: editQuestion()
//   //  **/
//   // it('should edit a question', () => {
//   //   component.editQuestion(QUESTIONS[0]);
//   //   expect(component.question).toEqual(QUESTIONS[0]);
//   //   inject([TagsService], (ts: TagsService) => {
//   //     ts.getAllTags().subscribe((s) => {
//   //       // console.log('output to tags service.');
//   //       // console.log(s);
//   //     });
//   //   });
//   // });

//   /**
//    * Test for a newTag method to assigned a newTag to the newTagString and resets the new string.
//    *
//    * Function tested: newTag()
//    **/
// //   it('should make a new tag and reset newTagString', inject([TagsService], (tgs: TagsService) => {
// //   component.newTagString = 'test';
// //   component.newTag();
// //   let newTag = new Tag();
// //   newTag.tagName = component.newTagString;
// //   if (component.newTagString) {
// //     tgs.createNewTag(component.newTagString).subscribe(d => {
// //       newTag = (d as Tag);
// //       component.currentTags.push(newTag);
// //     });
// //   }
// //   expect(component.newTagString).toBe('');
// // }));

// /**
//    * Test if gets all the tags in the tag array.
//    *
//    * Function tested: getTagIds()
//    **/
//   // it('should return all tags in the tag array', () => {
//   //   expect(component.getTagIds().length).toBe(0);
//   //   component.addNewTag(t0);
//   //   expect(component.getTagIds().length).toBe(1);
//   // });

//    /**
//    * Check if it adds a tag to the current tag array.
//    *
//    * Function tested: addTagToQuestion(Tag)
//    **/
//   // it('should add the selected tag to the current tags array and remove it from the all tags array', () => {
//   //   component.allTags = [];
//   //   component.allTags[0] = t0;
//   //   component.allTags[1] = t1;
//   //   component.currentTags = [];

//   //   expect(component.currentTags.length).toBe(0);
//   //   expect(component.allTags.length).toBe(2);

//   //   component.addTagToQuestion(t0);

//   //   expect(component.currentTags).toContain(t0);
//   //   expect(component.allTags).toContain(t1);
//   //   expect(component.allTags.length).toBe(1);
//   // });

//   /**
//    * Test if it adds the selected tag to the tag array and remove it from the current tag array.
//    *
//    * Function tested: RemoveTagFromQuestion(Tag)
//    **/
//   // it('should add the selected tag to the all tags array and remove it from the current tags array', () => {
//   //   component.allTags = [];
//   //   component.currentTags = [];
//   //   component.currentTags[0] = t0;
//   //   component.currentTags[1] = t1;

//   //   expect(component.allTags.length).toBe(0);
//   //   expect(component.currentTags.length).toBe(2);

//   //   component.removeTagFromQuestion(t0);

//   //   expect(component.allTags).toContain(t0);
//   //   expect(component.currentTags).toContain(t1);
//   //   expect(component.currentTags.length).toBe(1);
//   // });

//   /**
//    * populate the current question and the current tags with the selected question.
//    *
//    * Function tested: updateQuestions()
//    **/
//   // it('shoud update questions from the bucket', () => {
//   //   this.currentBucket = true;
//   //   component.questions = Question['test'];
//   //   component.updateQuestions();
//   //   expect(component.questions).toBe(Question['test']);
//   // });

//   /**
//    * Test to check if it adds new tags to the questions.
//    *
//    * Function tested: addNewTag()
//    **/
//   // it('should add new tags', () => {
//   //   component.addNewTag(t0);
//   //   let lastTagIndex = component.currentTags.length - 1;
//   //   expect(component.currentTags[lastTagIndex]).toEqual(t0);
//   //   component.addNewTag(t1);
//   //   lastTagIndex = component.currentTags.length - 1;
//   //   expect(component.currentTags[lastTagIndex]).toEqual(t1);
//   //   expect(component.currentTags[lastTagIndex - 1]).toEqual(t0);
//   // });

//   /**
//    * Test if it displays Saved successfully.
//    *
//    * Function tested: savedSuccessfully();
//    **/
//   // it('should save successfully',
//   // inject([AlertsService], (service: AlertsService) => {
//   //   component.savedSuccessfully();
//   //   let msg = '';
//   //   let ty = '';
//   //   service.getMessage().subscribe((s) => {
//   //     ty = s.type;
//   //     msg = s.text;
//   //     expect(ty).toEqual('success');
//   //     expect(msg).toEqual('Saved successfully');
//   //   });
//   // }));

//   /**
//    * Test if it display update successfully successfully.
//    *
//    * Function tested: updatedSuccessfully()
//    **/
//   // it('should update successfully',
//   // inject([AlertsService], (srv: AlertsService) => {
//   //   component.updatedSuccessfully();
//   //   let msgUpdate = '';
//   //   let tyUpdate = '';
//   //   srv.getMessage().subscribe((s) => {
//   //     tyUpdate = s.type;
//   //     msgUpdate = s.text;
//   //     expect(tyUpdate).toEqual('success');
//   //     expect(msgUpdate).toEqual('Updated successfully');
//   //   });
//   // }));

//   /**
//    * Test if an error message is sent to the alert service to display.
//    *
//    * Function tested: savedUnsuccessfull()
//    **/
//   // it('should display save unsuccessfull error message',
//   // inject([AlertsService], (srv: AlertsService) => {
//   //   component.savedUnsuccessfull();
//   //   let msgUpdate = '';
//   //   let tyUpdate = '';
//   //   srv.getMessage().subscribe((s) => {
//   //     tyUpdate = s.type;
//   //     msgUpdate = s.text;
//   //     expect(tyUpdate).toEqual('error');
//   //     expect(msgUpdate).toEqual('All Fields Must be Filled');
//   //   });
//   // }));

//   /**
//    * Resets the current tags array and add new tags to the
//    * current tags array.
//    *
//    * Function tested: removeTagsFromAll()
//    **/
//   // it('should remove tags from all', () => {
//   //   component.currentTags = [];
//   //   component.currentTags = TAGS;
//   //   component.newTags = [];
//   //   component.newTags[0] = t0;
//   //   component.newTags[1] = t1;
//   //   component.allTags = [];

//   //   expect(component.currentTags.length).toBe(4);
//   //   component.removeTagsFromAll();
//   //   expect(component.currentTags.length).toBe(2);
//   //   expect(component.currentTags).toContain(t0);
//   //   expect(component.currentTags).toContain(t1);
//   // });
// });

