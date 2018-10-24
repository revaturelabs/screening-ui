import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionComponent } from './introduction.component';
import { ViolationFlagComponent } from '../violation-flag/violation-flag.component';
import { SimpleTraineeService } from '../../services/simpleTrainee/simple-trainee.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UrlService } from '../../services/urls/url.service';
import { SkillTypesService } from '../../services/skill-types/skill-types.service';
import { ScreeningService } from '../../services/screening/screening.service';
import { SoftSkillsViolationService } from '../../services/soft-skills-violation/soft-skills-violation.service';
import { ViolationTypeService } from '../../services/violationType/violationType.service';
import { AlertsService } from '../../services/alert-service/alerts.service';

describe('IntroductionComponent', () => {
  let component: IntroductionComponent;
  let fixture: ComponentFixture<IntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionComponent, ViolationFlagComponent ],
      providers: [SimpleTraineeService, HttpClient, HttpHandler, UrlService, SkillTypesService, ScreeningService, SoftSkillsViolationService, ViolationTypeService, AlertsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
