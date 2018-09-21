import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesScreeningListComponent } from './candidates-screening-list.component';
import { FormsModule } from '@angular/forms';
import {
  NgxPaginationModule, PaginatePipe, PaginationControlsComponent,
  PaginationControlsDirective, PaginationService
} from 'ngx-pagination';
import { SearchPipe } from '../../util/search.pipe';
import { HttpClientModule } from '@angular/common/http';
import { SimpleTraineeService } from '../../services/simpleTrainee/simple-trainee.service';
import { ScreeningService } from '../../services/screening/screening.service';
import { ScheduleScreeningService } from '../../services/schedule-screening/schedule-screening.service';
import { SoftSkillsViolationService } from '../../services/soft-skills-violation/soft-skills-violation.service';
import { QuestionScoreService } from '../../services/question-score/question-score.service';
import { SkillTypeService } from '../../services/skillType/skill-type.service';
import { Dependencies } from '../../../caliber.test.module';
import { ScheduledScreening } from '../../entities/scheduleScreening';
import { SimpleTrainee } from '../../entities/simpleTrainee';

describe('CandidatesScreeningListComponent', () => {
  let component: CandidatesScreeningListComponent;
  let fixture: ComponentFixture<CandidatesScreeningListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CandidatesScreeningListComponent, SearchPipe, PaginatePipe, PaginationControlsComponent,
        PaginationControlsDirective],
      imports: [FormsModule, HttpClientModule],
      providers: [SimpleTraineeService, ScreeningService, ScheduleScreeningService, SoftSkillsViolationService,
        QuestionScoreService, SkillTypeService, PaginationService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatesScreeningListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
    const confirm = localStorage.getItem('scheduledScreeningID');
    expect(confirm).toEqual('1');
  });

  // it('should reload window', () => {
  //   const spy = spyOn(window.location, 'reload');
  //   component.ngOnInit();
  //   expect(spy).toHaveBeenCalled();
  // });

  it('should begin screening', () => {
    component.selectedScheduledScreening = {} as ScheduledScreening;
    component.selectedScheduledScreening.scheduledScreeningId = 1;
    component.selectedScheduledScreening.trainer = 1;
    component.selectedCandidate = {} as SimpleTrainee;
    component.selectedCandidate.skillTypeID = 1;
    component.beginScreening();
    expect(component.scheduledScreenings).toBeDefined();
  });

  it('should populate localStorage', () => {
    component.selectedScheduledScreening = {} as ScheduledScreening;
    component.selectedScheduledScreening.scheduledScreeningId = 1;
    component.selectedScheduledScreening.trainer = 1;
    component.selectedCandidate = {} as SimpleTrainee;
    component.selectedCandidate.skillTypeID = 1;
    component.beginScreening();
    expect(localStorage.getItem('screeningID')).not.toBeNull();
  });

});
