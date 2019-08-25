import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesScreeningListComponent } from './candidates-screening-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  PaginatePipe, PaginationControlsComponent,
  PaginationControlsDirective, PaginationService
} from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { ScreeningStateService } from '../../services/screening-state/screening-state.service';
import { ScreeningService } from '../../services/screening/screening.service';
import { ScheduledScreeningService } from '../../services/scheduled-screening/scheduled-screening.service';
import { SoftSkillsViolationService } from '../../services/soft-skills-violation/soft-skills-violation.service';
import { QuestionScoreService } from '../../services/question-score/question-score.service';
import { SkillTypesService } from '../../services/skill-types/skill-types.service';
import { ScheduledScreening } from '../../entities/ScheduledScreening';
import { Candidate } from '../../entities/Candidate';
import { SearchPipe } from 'src/app/pipes/search.pipe';
import { UrlService } from 'src/app/services/urls/url.service';
import { SkillType } from 'src/app/entities/SkillType';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';


describe('CandidatesScreeningListComponent', () => {
  let component: CandidatesScreeningListComponent;
  let fixture: ComponentFixture<CandidatesScreeningListComponent>;
  let scheduledScreeningService: ScheduledScreeningService;
  let screeningStateService:ScreeningStateService;
  
  let candidateFake:Candidate={
    candidateId: 5,
    resourceId: 5,
    name: "bam bam",
    phoneNumber: "9156456546548975213216984845",
    recruiterName: "your mom",
    college: "bad schoo;",
    degree: "waste of time",
    major: "X"
  }

  let skillTypeFake={
    skillTypeId: 5,
    title: "something",
    active: true
  }
  
  let someScreening:ScheduledScreening={
  scheduledScreeningId: 5,
  candidate: candidateFake,
  track: skillTypeFake,
  scheduledStatus: "something",
  scheduledDate: new Date()
  }

  let screeningList:ScheduledScreening[]=[someScreening]





  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CandidatesScreeningListComponent, PaginatePipe, PaginationControlsComponent,
        PaginationControlsDirective, SearchPipe],
      imports: [FormsModule, HttpClientModule, ReactiveFormsModule],
      providers: [ScreeningStateService, ScreeningService, ScheduledScreeningService, SoftSkillsViolationService,
        QuestionScoreService, SkillTypesService, PaginationService, UrlService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatesScreeningListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    scheduledScreeningService=TestBed.get(ScheduledScreeningService);
    screeningStateService=TestBed.get(ScreeningStateService);
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return none', () => {
    const result = component.toggleBeginScreeningPrompt();
    expect(result).toEqual('none');
  });

  it('should return block', () => {
    component.showBeginScreeningPrompt = true;
    const result = component.toggleBeginScreeningPrompt();
    expect(result).toEqual('block');
  });

  it('should update storage', () => {
    component.selectedScheduledScreening = {} as ScheduledScreening;
    component.selectedScheduledScreening.scheduledScreeningId = 1;
    component.confirmSelectedCandidate();
    const confirm = component.selectedScheduledScreening.scheduledScreeningId;
    expect(confirm).toEqual(1);
  });

  it('should begin screening', () => {
    component.selectedScheduledScreening = {} as ScheduledScreening;
    component.selectedScheduledScreening.scheduledScreeningId = 1;
    component.selectedCandidate = {} as Candidate;
    component.selectedScheduledScreening.track = {} as SkillType;
    component.selectedScheduledScreening.track.skillTypeId = 1;
    component.beginScreening();
    expect(component.scheduledScreenings).toBeDefined();
  });

  it('should populate localStorage', () => {
    component.selectedScheduledScreening = {} as ScheduledScreening;
    component.selectedScheduledScreening.scheduledScreeningId = 1;
    component.selectedCandidate = {} as Candidate;
    component.selectedScheduledScreening.track = {} as SkillType;
    component.selectedScheduledScreening.track.skillTypeId = 1;
    component.beginScreening();
    // expect(localStorage.getItem('screeningID')).not.toBeNull();
  });

  it('should make a populate a list and allow for element selection',() =>{

     component.selectedScheduledScreening = {} as ScheduledScreening;
    // component.selectedScheduledScreening.scheduledScreeningId = 5;
    // component.selectedCandidate = {} as Candidate;
    // component.selectedCandidate.resourceId=5;
    // component.selectedCandidate.name='bam bam';
    // component.selectedScheduledScreening.track = {} as SkillType;
    // component.selectedScheduledScreening.track.skillTypeId = 5;
    //someScreening=component.selectedScheduledScreening;

    spyOn(scheduledScreeningService,'getScheduledScreenings')
      .and.returnValue( screeningList);
      
     component.ngOnInit();
     
      fixture.detectChanges();
      const elementH1= fixture.debugElement.query(By.css('h1')).nativeElement;
      
      const element= fixture.debugElement.queryAll(By.css('tr'));
     

      element[1].nativeElement.click();
     
     
     expect(component.selectedScheduledScreening.scheduledScreeningId).toEqual(5);

  

      



  });

});
