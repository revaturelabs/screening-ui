import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesScreeningListComponent } from './candidates-screening-list.component';
import { ScreeningStateService } from '../../services/screening-state/screening-state.service';
import { ScheduledScreeningService } from '../../services/scheduled-screening/scheduled-screening.service';
import { Dependencies } from '../../screenforce.test.module';
import { ScheduledScreening } from '../../entities/ScheduledScreening';
import { Candidate } from '../../entities/Candidate';
import { By } from '@angular/platform-browser';
import { SkillType } from '../../entities/SkillType';

describe('CandidatesScreeningListComponent', () => {
  let component: CandidatesScreeningListComponent;
  let fixture: ComponentFixture<CandidatesScreeningListComponent>;
  let scheduledScreeningService: ScheduledScreeningService;
  let screeningStateService: ScreeningStateService;

  const candidateFake: Candidate = {
    candidateId: 5,
    resourceId: 5,
    name: 'Beethoven',
    phoneNumber: '9156452593',
    recruiterName: 'Bab',
    college: 'University',
    degree: 'Symphony 3',
    major: 'E flat'
  };

  const skillTypeFake = {
    skillTypeId: 5,
    title: 'SQL',
    active: true
  };

  const someScreening: ScheduledScreening = {
  scheduledScreeningId: 5,
  candidate: candidateFake,
  track: skillTypeFake,
  scheduledStatus: 'Screening in Progress',
  scheduledDate: new Date()
  };

  const screeningList: ScheduledScreening[] = [someScreening];

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies)
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatesScreeningListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    scheduledScreeningService = TestBed.get(ScheduledScreeningService);
    screeningStateService = TestBed.get(ScreeningStateService);
  });

  /* to remove the localstorage after the test so it does not interefere with with other tests involving it */
  afterAll(() => {
    localStorage.removeItem('screeningID');
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

  it('should begin screening', () => {
    component.selectedScheduledScreening = {} as ScheduledScreening;
    component.selectedScheduledScreening.scheduledScreeningId = 1;
    component.selectedScheduledScreening.track = {} as SkillType;
    component.selectedScheduledScreening.track.skillTypeId = 1;
    component.beginScreening();
    expect(component.scheduledScreenings).toBeDefined();
  });

  it('should populate a list and allow for element selection', () => {
    spyOn(scheduledScreeningService, 'getScheduledScreenings')
      .and.returnValue( screeningList);
      component.ngOnInit();
      fixture.detectChanges();
      const element = fixture.debugElement.queryAll(By.css('tr'));
     element[1].nativeElement.click();
     expect(component.selectedScheduledScreening.scheduledScreeningId).toEqual(5);
  });
});

