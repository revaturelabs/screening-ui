import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolationFlagComponent } from './violation-flag.component';
import { SoftSkillsViolationService } from '../../services/soft-skills-violation/soft-skills-violation.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { SimpleTraineeService } from '../../services/simpleTrainee/simple-trainee.service';
import { SkillTypesService } from '../../services/skill-types/skill-types.service';
import { ViolationTypeService } from '../../services/violationType/violationType.service';
import { AlertsService } from '../../services/alert-service/alerts.service';
import { ViolationType } from '../../entities/ViolationType';
import { UrlService } from '../../services/urls/url.service';
import { ScreeningService } from 'src/app/services/screening/screening.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Http } from '@angular/http';

// Author: David Gustafson

// Can't test with subscribes, comment out subscribes in component to run tests

describe('ViolationFlagComponent', () => {
  let component: ViolationFlagComponent;
  let fixture: ComponentFixture<ViolationFlagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViolationFlagComponent ],
      imports: [RouterTestingModule],
      providers: [ SoftSkillsViolationService, HttpClient, HttpHandler, SimpleTraineeService,
      SkillTypesService, ViolationTypeService, AlertsService, UrlService, ScreeningService, Http]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViolationFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should push violation list', () => {
    component.updateViolationList({} as ViolationType, true);
    expect(component.violationTypesChecked).not.toBeNull();
  });

  it('should splice violation list', () => {
    component.updateViolationList({} as ViolationType, false);
    expect(component.violationTypesChecked).toEqual([]);
  });

  it('should call', () => {
    expect(component.cancelViolation()).toBeUndefined();
  });

  it('should change flag', () => {
    component.flagChange();
    expect(component.flagEvent).not.toContain('update');
  });

  it('should submit violation', () => {
    localStorage.setItem('screeningID', '1');
    component.submitViolation({} as ViolationType, 'hi');
    expect(component.flagEvent).not.toContain('update');
  });

});
