import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalReportComponent } from './final-report.component';
import { ScreeningService } from '../../services/screening/screening.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ScreeningStateService } from '../../services/screening-state/screening-state.service';
import { TracksService } from '../../services/tracks/tracks.service';
import { TrackCategoryService } from '../../services/trackCategoryLookup/track-category.service';
import { QuestionScoreService } from '../../services/question-score/question-score.service';
import { ScoresToCategoriesUtil } from '../../util/scoresToCategories.util';
import { AlertsService } from '../../services/alert-service/alerts.service';
import { SoftSkillsViolationService } from '../../services/soft-skills-violation/soft-skills-violation.service';

// Author: David Gustafson
// Can't test because of error: "Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https"

describe('FinalReportComponent', () => {
  let component: FinalReportComponent;
  let fixture: ComponentFixture<FinalReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalReportComponent ],
      providers: [ ScreeningService, HttpClient, HttpHandler, ScreeningStateService, TracksService,
        TrackCategoryService, QuestionScoreService, ScoresToCategoriesUtil, AlertsService, SoftSkillsViolationService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
