import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolationFlagComponent } from './violation-flag.component';
import { SoftSkillsViolationService } from '../../services/soft-skills-violation/soft-skills-violation.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ScreeningStateService } from '../../services/screening-state/screening-state.service';
import { TracksService } from '../../services/tracks/tracks.service';
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
      declarations: [ViolationFlagComponent],
      providers: [
        SoftSkillsViolationService,
        HttpClient,
        HttpHandler,
        ScreeningStateService,
        TracksService,
        ViolationTypeService,
        AlertsService,
        UrlService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViolationFlagComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
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
});
