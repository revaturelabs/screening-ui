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

describe('CandidatesScreeningListComponent', () => {
  let component: CandidatesScreeningListComponent;
  let fixture: ComponentFixture<CandidatesScreeningListComponent>;

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
  });

  it('should create', (done: DoneFn) => {
    expect(component).toBeTruthy();
    done();
  });

  it('should return none', (done: DoneFn) => {
    const result = component.toggleBeginScreeningPrompt();
    expect(result).toEqual('none');
    done();
  });

  it('should return block', (done: DoneFn) => {
    component.showBeginScreeningPrompt = true;
    const result = component.toggleBeginScreeningPrompt();
    expect(result).toEqual('block');
    done();
  });

  it('should update storage', (done: DoneFn) => {
    component.selectedScheduledScreening = {} as ScheduledScreening;
    component.selectedScheduledScreening.scheduledScreeningId = 1;
    component.confirmSelectedCandidate();
    const confirm = component.selectedScheduledScreening.scheduledScreeningId;
    expect(confirm).toEqual(1);
    done();
  });

  // it('should reload window', () => {
  //   const spy = spyOn(window.location, 'reload');
  //   component.ngOnInit();
  //   expect(spy).toHaveBeenCalled();
  // });

  it('should begin screening', (done: DoneFn) => {
    component.selectedScheduledScreening = {} as ScheduledScreening;
    component.selectedScheduledScreening.scheduledScreeningId = 1;
    component.selectedCandidate = {} as Candidate;
    component.selectedScheduledScreening.track = {} as SkillType;
    component.selectedScheduledScreening.track.skillTypeId = 1;
    component.beginScreening();
    expect(component.scheduledScreenings).toBeDefined();
    done();
  });

  it('should populate localStorage', (done: DoneFn) => {
    component.selectedScheduledScreening = {} as ScheduledScreening;
    component.selectedScheduledScreening.scheduledScreeningId = 1;
    component.selectedCandidate = {} as Candidate;
    component.selectedScheduledScreening.track = {} as SkillType;
    component.selectedScheduledScreening.track.skillTypeId = 1;
    component.beginScreening();
    expect(localStorage.getItem('screeningID')).not.toBeNull();
    done();
  });

});
