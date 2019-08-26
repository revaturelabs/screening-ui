
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { BucketsService } from '../../services/buckets/buckets.service';
//import { QuestionComponent } from './skillType-buckets.component';
import { FormsModule } from '@angular/forms';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertsService } from 'src/app/services/alert-service/alerts.service';
import { HttpModule } from '@angular/http';
import { Buckets } from 'aws-sdk/clients/s3';
import { Bucket } from 'src/app/entities/Bucket';


import { of } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { UrlService } from 'src/app/services/urls/url.service';
import { QuestionComponent } from './question.component';
import { QuestionsService } from 'src/app/services/questions/questions.service';
import { Question } from 'src/app/entities/Question';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('Question Component', () => {


    let fakeB={
        bucketId: 55,
        bucketDescription: "my fun bucket",
        isActive: true
    }
    let fakeQ={
        questionId: 5,
        questionText: "What?",
        sampleAnswer1: "Some",
        sampleAnswer2: "Some",
        sampleAnswer3: "Some",
        sampleAnswer4: "Some",
        sampleAnswer5: "Some",
        isActive: true,
        bucket: fakeB
    }
    let fixture:ComponentFixture<QuestionComponent>;
    let component:QuestionComponent;
    let fakeBucketService:BucketsService;
    let fakeQuestionService:QuestionsService
    let fakeQuestions:Question[]=[fakeQ];

   
    
    beforeEach(()=>{
      TestBed.configureTestingModule({
        imports:[RouterTestingModule,FormsModule,HttpModule,HttpClientModule,BrowserAnimationsModule],
        declarations:[QuestionComponent],
        providers:[BucketsService,AlertsService,UrlService,QuestionsService,FormBuilder]
      })
      fixture=TestBed.createComponent(QuestionComponent);
      component=fixture.componentInstance;
      fakeBucketService=TestBed.get(BucketsService);
      fakeQuestionService=TestBed.get(QuestionsService);
    });
    
    
    it(`Checking if questions were returned`,()=>{

      

        spyOn(fakeBucketService,`getCurrentBucket`)
        .and.returnValue(fakeB);

        spyOn(fakeQuestionService,`getBucketQuestions`)
        .and.returnValue(of(fakeQuestions));

        spyOn(fakeQuestionService,`deactivateQuestion`)
        .and.returnValue(false);

        spyOn(fakeQuestionService,`activateQuestion`)
        .and.returnValue(true);

        fixture.detectChanges();

        const bool=fakeQ.isActive;

       
        const sda=fixture.debugElement.queryAll(By.css("a"))
        // for (let i=0;i<sda.length;i++){
        //    // sda[i].nativeElement.click();
        //     console.log(i)
        // }
       

        expect(sda[1].nativeElement.textContent).toContain("What?");
      
    });

    it(`Question status change `,()=>{

        spyOn(fakeBucketService,`getCurrentBucket`)
        .and.returnValue(fakeB);

        spyOn(fakeQuestionService,`getBucketQuestions`)
        .and.returnValue(of(fakeQuestions));

        spyOn(fakeQuestionService,`deactivateQuestion`)
        .and.returnValue( of(false));

        spyOn(fakeQuestionService,`activateQuestion`)
        .and.returnValue(of(true));

        spyOn(fakeQuestionService,`updateQuestion`)

        fixture.detectChanges();

        const bool=fakeQ.isActive;
        component.changeQuestionStatus(fakeQ);

        expect(fakeQ.isActive).toEqual(!bool);
        
    });



});
    