// modules
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgxPaginationModule, PaginatePipe } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';




// routing
import { routes } from './app.routes';
import { SpringInterceptor } from './interceptors/spring.interceptor';

// services
import { AlertsService } from './services/alert-service/alerts.service';
import { SimpleTraineeService } from './services/simpleTrainee/simple-trainee.service';
import { SkillTypesService } from './services/skill-types/skill-types.service';
import { ScreeningService } from './services/screening/screening.service';
import { SkillTypeBucketService } from './services/skillTypeBucketLookup/skill-type-bucket.service';
import { QuestionsService } from './services/questions/questions.service';
import { BucketsService } from './services/buckets/buckets.service';
/** for in memory data service
  * executed, 'npm i angular-in-memory-web-api --save', remove from packange.json if not in use.
  */
import { GambitBatchUtilService } from './services/gambit-batch-util/gambit-batch-util.service';
import { UrlService } from './services/urls/url.service';
import { ScheduleScreeningService } from './services/schedule-screening/schedule-screening.service';

// N.T.
import { ApiService } from './services/api/api.service';

// pipes
import { SearchPipe } from './pipes/search.pipe';
import { BucketFilterPipe } from './pipes/skillType-buckets.filter';

// components
import { SettingsComponent } from './components/settings/settings.component';
import { ScreeningComponent } from './components/screening/screening.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { AnswerComponent } from './components/answer/answer.component';
import { PassFailComponent } from './components/pass-fail/pass-fail.component';
import { ViolationFlagComponent } from './components/violation-flag/violation-flag.component';
import { ScreeningConfigComponent } from './components/screening-config/screening-config.component';
import { SkillTypesComponent } from './components/skillTypes/skillTypes.component';
import { SkillTypeBucketsComponent } from './components/skillType-buckets/skillType-buckets.component';
import { QuestionComponent } from './components/question/question.component';
import { CandidatesScreeningListComponent } from './components/candidates-screening-list/candidates-screening-list.component';
import { QuestionsTableComponent } from './components/questions-table/questions-table.component';
import { FinalReportComponent } from './components/final-report/final-report.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { QuestionScoreService } from './services/question-score/question-score.service';
import { SoftSkillsViolationService } from './services/soft-skills-violation/soft-skills-violation.service';
import { ViolationTypeService } from './services/violationType/violationType.service';
import { CookieService } from 'ngx-cookie-service';
import { NavComponent } from './components/nav/nav.component';
import { SoftSkillsService } from './services/soft-skills/soft-skills.service';
import { ScreenerBucketsService } from './services/screener-buckets/screener-buckets.service';
import { HttpErrorHandlerService } from './services/http-error/http-error-handler.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RoleGuard } from './role-guard';
import { RouteService } from './services/routes/route.service';
import { MockUser } from './mock-data/mocksimpleservice.service';

// import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';

export const Dependencies = {
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forChild(routes),
    FormsModule,
    // ChartsModule,
    ReactiveFormsModule,
    // SimpleNotificationsModule.forRoot(),
    NgxPaginationModule,
    BrowserAnimationsModule,
    RouterTestingModule.withRoutes(routes)
  ],
  declarations: [
    // pipes
    SearchPipe,
    SettingsComponent,
    BucketFilterPipe,
    // components
    SettingsComponent,
    ScreeningConfigComponent,
    IntroductionComponent,
    AnswerComponent,
    PassFailComponent,
    ViolationFlagComponent,
    SkillTypesComponent,
    SkillTypeBucketsComponent,
    QuestionComponent,
    ScreeningComponent,
    CandidatesScreeningListComponent,
    QuestionsTableComponent,
    FinalReportComponent,
    AppComponent,
    CandidateComponent,
    BucketFilterPipe,
    NavComponent
   
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpringInterceptor, multi: true },  // interceptor for all HTTP requests
    QuestionsService,
    QuestionScoreService,
    BucketsService,
    {provide: SimpleTraineeService, useClass: MockUser},
    SkillTypesService,
    SoftSkillsViolationService,
    ScreeningService,
    SkillTypeBucketService,
    ScheduleScreeningService,
    HttpClient,
    NgbModal,
    AlertsService,
    ApiService,
    NgbActiveModal,
    GambitBatchUtilService,
    GambitBatchUtilService,
    ViolationTypeService,
    UrlService,
    CookieService,
    SoftSkillsService,
    ScreenerBucketsService,
    HttpErrorHandlerService,
    RoleGuard,
    RouteService
  ],
  bootstrap: [
  ],
  exports: [
    ViolationFlagComponent,
    PaginatePipe,
  ],
  entryComponents: [
  ],
};
