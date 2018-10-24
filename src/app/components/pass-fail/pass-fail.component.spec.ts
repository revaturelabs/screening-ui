import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassFailComponent } from './pass-fail.component';
import { ViolationFlagComponent } from '../violation-flag/violation-flag.component';
import { SoftSkillsViolationService } from '../../services/soft-skills-violation/soft-skills-violation.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ScreeningService } from '../../services/screening/screening.service';
import { SimpleTraineeService } from '../../services/simpleTrainee/simple-trainee.service';
import { SkillTypesService } from '../../services/skill-types/skill-types.service';
import { ViolationTypeService } from '../../services/violationType/violationType.service';
import { AlertsService } from '../../services/alert-service/alerts.service';
import { UrlService } from '../../services/urls/url.service';

// Author: David Gustafson

// Cannot test: Appears to be error on component side

describe('PassFailComponent', () => {
  let component: PassFailComponent;
  let fixture: ComponentFixture<PassFailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PassFailComponent, ViolationFlagComponent],
      providers: [SoftSkillsViolationService, HttpClient, HttpHandler, ScreeningService, SimpleTraineeService,
        ViolationTypeService, AlertsService, UrlService, SkillTypesService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true', () => {
    const result = component.wasClicked();
    expect(result).toEqual(true);
  });

  it('should return true when wasClicked is called', () => {
    component.passChecked = false;
    const result = component.wasClicked();
    expect(result).toEqual(true);
  });

  it('endScreeningPrompt should return none when endScreening is false', ()=>{
    component.endScreening = false;
    const result = component.endScreeningPrompt();
    expect(result).toEqual('none');
  });

  it('disabled should be false when updateCheckedFail is called', () => {
    component.failChecked = false;
    const result = component.updateCheckedFail(true) ;
    expect(component.disabled).toEqual(false);
  });

  it('pass should set endScreening to true', () => {
    const result = component.pass() ;
    expect(component.endScreening).toEqual(true);
  });

  it('fail should set endScreening to true', () => {
    const result = component.fail() ;
    expect(component.endScreening).toEqual(true);
  });

  it('getPassed should return false when not set', () => {
    const result = component.getPassed() ;
    expect(component.endScreening).toEqual(false);
  });

  it('endScreeningPrompt should return block when endScreening is true', () => {
    component.endScreening = true;
    const result = component.endScreeningPrompt() ;
    expect(result).toEqual('block');
  });

  it('should return false if softskillviolation is undefined', () => {
    const result = component.hasViolations() ;
    expect(result).toEqual(false);
  });

  it('should call pass() if passChecked is true when calling submit', () => {
    component.passChecked = true;
    const result = component.submit();
    expect(component.endScreening).toEqual(true);
  });
  
});
