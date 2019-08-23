import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolationFlagComponent } from './violation-flag.component';
import { SoftSkillsViolationService } from '../../services/soft-skills-violation/soft-skills-violation.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ScreeningStateService } from '../../services/screening-state/screening-state.service';
import { SkillTypesService } from '../../services/skill-types/skill-types.service';
import { ViolationTypeService } from '../../services/violationType/violationType.service';
import { AlertsService } from '../../services/alert-service/alerts.service';
import { ViolationType } from '../../entities/ViolationType';
import { UrlService } from '../../services/urls/url.service';
import { RouterTestingModule } from '@angular/router/testing'; 

// Author: David Gustafson

// Can't test with subscribes, comment out subscribes in component to run tests

describe('ViolationFlagComponent', () => {
  let component: ViolationFlagComponent;
  let fixture: ComponentFixture<ViolationFlagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ViolationFlagComponent ],
      providers: [ SoftSkillsViolationService, HttpClient, HttpHandler, ScreeningStateService,
      SkillTypesService, ViolationTypeService, AlertsService, UrlService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViolationFlagComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', (done: DoneFn) => {
    expect(component).toBeTruthy();
    done();
  });

  it('should push violation list', (done: DoneFn) => {
    component.updateViolationList({} as ViolationType, true);
    expect(component.violationTypesChecked).not.toBeNull();
    done();
  });

  it('should splice violation list', (done: DoneFn) => {
    component.updateViolationList({} as ViolationType, false);
    expect(component.violationTypesChecked).toEqual([]);
    done();
  });

  it('should call', (done: DoneFn) => {
    expect(component.cancelViolation()).toBeUndefined();
    done();
  });

  it('should change flag', (done: DoneFn) => {
    component.flagChange();
    expect(component.flagEvent).not.toContain('update');
    done();
  });





//This needs to have a mock/spy service added to it

  // it('should submit violation', () => {
  //   localStorage.setItem('screeningID', '1');
  //   component.submitViolation({} as ViolationType, 'hi');

  //   expect(component.flagEvent).not.toContain('update');
  // });

});
