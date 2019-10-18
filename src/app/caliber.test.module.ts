// modules
import { Injectable } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxPaginationModule, PaginatePipe } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// routing
import { routes } from './app.routes';
import { SpringInterceptor } from './interceptors/spring.interceptor';

// services
import { AlertsService } from './services/alert-service/alerts.service';
import { BucketsService } from './services/buckets/buckets.service';
import { HttpErrorHandlerService } from './services/http-error/http-error-handler.service';
import { QuestionScoreService } from './services/question-score/question-score.service';
import { QuestionsService } from './services/questions/questions.service';
import { ScreenerBucketsService } from './services/screener-buckets/screener-buckets.service';
import { ScreeningService } from './services/screening/screening.service';
import { SimpleTraineeService } from './services/simpleTrainee/simple-trainee.service';
import { SkillTypesService } from './services/skill-types/skill-types.service';
import { SkillTypeBucketService } from './services/skillTypeBucketLookup/skill-type-bucket.service';
import { SoftSkillsService } from './services/soft-skills/soft-skills.service';
import { SoftSkillsViolationService } from './services/soft-skills-violation/soft-skills-violation.service';
import { ViolationTypeService } from './services/violationType/violationType.service';
/** for in memory data service
  * executed, 'npm i angular-in-memory-web-api --save', remove from packange.json if not in use.
  */
import { GambitBatchUtilService } from './services/gambit-batch-util/gambit-batch-util.service';
import { UrlService } from './services/urls/url.service';
import { ScheduleScreeningService } from './services/schedule-screening/schedule-screening.service';

// N.T.
import { ApiService } from './services/api/api.service';

// pipes
import { ArrToStringPipe } from './pipes/arr-to-string.pipe';
import { BucketFilterPipe } from './pipes/skillType-buckets.filter';
import { FilterByPipe } from './pipes/filter-by.pipe';
import { GraphDataPipe } from './pipes/graph-data.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { TierPipe } from './pipes/tier-pipe';
import { ToolbarFilterPipe } from './pipes/toolbar-filter.pipe';
import { TraineeSearch } from './pipes/trainee-search.pipe';
import { TrainerPipePipe } from './pipes/trainer-pipe.pipe';
import { SearchPipe } from './pipes/search.pipe';

// components
import { AppComponent } from './app.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { CandidatesScreeningListComponent } from './components/candidates-screening-list/candidates-screening-list.component';
import { FinalReportComponent } from './components/final-report/final-report.component';
import { QuestionsTableComponent } from './components/questions-table/questions-table.component';
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

import { NavModule } from './nav.module';
import { RoleGuard } from './role-guard';
import { CandidateComponent } from './components/candidate/candidate.component';

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
    NavModule,
    Injectable
  ],
  declarations: [
    // pipes
    SearchPipe,
    ArrToStringPipe,
    BucketFilterPipe,
    GraphDataPipe,
    TierPipe,
    TraineeSearch,
    ToolbarFilterPipe,
    TrainerPipePipe,
    OrderByPipe,
    FilterByPipe,
    SettingsComponent,
    // components
    SettingsComponent,
    ScreeningConfigComponent,
    AlertsComponent,
    IntroductionComponent,
    CandidatesScreeningListComponent,
    FinalReportComponent,
    QuestionsTableComponent,
    AnswerComponent,
    PassFailComponent,
    ViolationFlagComponent,
    SkillTypesComponent,
    SkillTypeBucketsComponent,
    QuestionComponent,
    CandidateComponent,
    AppComponent,
    ScreeningComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpringInterceptor, multi: true },  // interceptor for all HTTP requests
    QuestionsService,
    BucketsService,
    SimpleTraineeService,
    SkillTypesService,
    ScreeningService,
    QuestionScoreService,
    ScreenerBucketsService,
    SkillTypeBucketService,
    SoftSkillsViolationService,
    ViolationTypeService,
    ScheduleScreeningService,
    SoftSkillsService,
    HttpErrorHandlerService,
    HttpClient,
    NgbModal,
    RoleGuard,
    AlertsService,
    ApiService,
    NgbActiveModal,
    { provide: Router, useValue: {} },
    GambitBatchUtilService,
    GambitBatchUtilService,
    UrlService,
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
