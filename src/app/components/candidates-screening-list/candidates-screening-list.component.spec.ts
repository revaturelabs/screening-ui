import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesScreeningListComponent } from './candidates-screening-list.component';
import { FormsModule } from '@angular/forms';
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

describe('CandidatesScreeningListComponent', () => {
  let component: CandidatesScreeningListComponent;
  let fixture: ComponentFixture<CandidatesScreeningListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CandidatesScreeningListComponent, PaginatePipe, PaginationControlsComponent,
        PaginationControlsDirective],
      imports: [FormsModule, HttpClientModule],
      providers: [ScreeningStateService, ScreeningService, ScheduledScreeningService, SoftSkillsViolationService,
        QuestionScoreService, SkillTypesService, PaginationService]
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
    component.selectedCandidate = {} as Candidate;
    component.selectedScheduledScreening.track.skillTypeId = 1;
    component.beginScreening();
    expect(component.scheduledScreenings).toBeDefined();
  });

  it('should populate localStorage', () => {
    component.selectedScheduledScreening = {} as ScheduledScreening;
    component.selectedScheduledScreening.scheduledScreeningId = 1;
    component.selectedCandidate = {} as Candidate;
    component.selectedScheduledScreening.track.skillTypeId = 1;
    component.beginScreening();
    expect(localStorage.getItem('screeningID')).not.toBeNull();
  });

});
