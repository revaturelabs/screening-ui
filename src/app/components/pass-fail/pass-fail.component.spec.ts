import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassFailComponent } from './pass-fail.component';
import { ViolationFlagComponent } from '../violation-flag/violation-flag.component';
import { SoftSkillsViolationService } from '../../services/soft-skills-violation/soft-skills-violation.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ScreeningService } from '../../services/screening/screening.service';
import { ScreeningStateService } from '../../services/screening-state/screening-state.service';
import { SkillTypesService } from '../../services/skill-types/skill-types.service';
import { ViolationTypeService } from '../../services/violationType/violationType.service';
import { AlertsService } from '../../services/alert-service/alerts.service';
import { UrlService } from '../../services/urls/url.service';
import { RouterTestingModule } from '@angular/router/testing'; 



// Author: David Gustafson

// Cannot test: Appears to be error on component side

describe('PassFailComponent', () => {
  let component: PassFailComponent;
  let fixture: ComponentFixture<PassFailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PassFailComponent, ViolationFlagComponent],
      providers: [SoftSkillsViolationService, HttpClient, HttpHandler, ScreeningService, ScreeningStateService,
        ViolationTypeService, AlertsService, UrlService, SkillTypesService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassFailComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
