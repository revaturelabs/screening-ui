import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViolationFlagComponent } from '../violation-flag/violation-flag.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { UrlService } from '../../services/urls/url.service';
import { IntroductionComponent } from './introduction.component';
import { ScreeningStateService } from '../../services/screening-state/screening-state.service';
// refactor skilltype -> track
import { TracksService } from '../../services/tracks/tracks.service';
import { ScreeningService } from '../../services/screening/screening.service';
import { SoftSkillsViolationService } from '../../services/soft-skills-violation/soft-skills-violation.service';
import { ViolationTypeService } from '../../services/violationType/violationType.service';
import { AlertsService } from '../../services/alert-service/alerts.service';



describe('IntroductionComponent', () => {
  let component: IntroductionComponent;
  let fixture: ComponentFixture<IntroductionComponent>;

  // refactor skilltype -> track
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [ IntroductionComponent, ViolationFlagComponent],
      providers: [ ScreeningStateService, UrlService, TracksService, ScreeningService,
      SoftSkillsViolationService, ViolationTypeService, AlertsService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
