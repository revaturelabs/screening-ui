// modules
import { Injectable } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal, NgbTabset, NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxPaginationModule, PaginatePipe } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';




// routing
import { routes } from './app.routes';
import { SpringInterceptor } from './interceptors/spring.interceptor';

// services
import { AlertsService } from './services/alert-service/alerts.service';
import { ScreeningStateService } from './services/screening-state/screening-state.service';
import { SkillTypesService } from './services/skill-types/skill-types.service';
import { SkillTypeBucketService } from './services/skillTypeBucketLookup/skill-type-bucket.service';
import { UrlService } from './services/urls/url.service';
import { ScheduledScreeningService } from './services/scheduled-screening/scheduled-screening.service';

// pipes
import { ArrToStringPipe } from './pipes/arr-to-string.pipe';
import { FilterByPipe } from './pipes/filter-by.pipe';
import { GraphDataPipe } from './pipes/graph-data.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { TierPipe } from './pipes/tier-pipe';
import { SearchPipe } from './pipes/search.pipe';
import { BucketFilterPipe } from './pipes/skillType-buckets.filter';

// components
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
import { QuestionScoreService } from './services/question-score/question-score.service';
import { SoftSkillsViolationService } from './services/soft-skills-violation/soft-skills-violation.service';
import { ViolationTypeService } from './services/violationType/violationType.service';
import { CookieService } from 'ngx-cookie-service';
import { NavComponent } from './components/nav/nav.component';
import { SoftSkillsService } from './services/soft-skills/soft-skills.service';
import { RoleGuard } from './role-guard';
import { CandidateComponent } from './components/candidate/candidate.component';
import { AuthenticationService } from './services/authentication/authentication.service';
import { AppComponent } from './app.component';
import { AverageSkillComponent } from './components/reports/average-skill/average-skill.component';
import { LoginComponent } from './components/login/login.component';
import { AverageBucketTypeComponent } from './components/reports/average-bucket-type/average-bucket-type.component';
import { MasterReportComponent } from './components/reports/master-report/master-report.component';
import { ReportSidebarComponent } from './components/reports/report-sidebar/report-sidebar.component';
import { ViolationsByTypeComponent } from './components/reports/violations-by-type/violations-by-type.component';
import { QuestionsService } from './services/questions/questions.service';
import { BucketsService } from './services/buckets/buckets.service';
import { ScreeningService } from './services/screening/screening.service';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';
import { Ng5SliderModule } from 'ng5-slider';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';


// import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';

export const Dependencies = {
  imports: [
    AmplifyAngularModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HighchartsChartModule,
    HttpClientModule,
    NgbModule,
    NgxPaginationModule,
    Ng5SliderModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    RouterTestingModule.withRoutes(routes)
  ],
  declarations: [
    AppComponent,
    AnswerComponent,
    CandidatesScreeningListComponent,
    FinalReportComponent,
    IntroductionComponent,
    NavComponent,
    PassFailComponent,
    QuestionComponent,
    QuestionsTableComponent,
    ScreeningConfigComponent,
    SkillTypeBucketsComponent,
    SkillTypesComponent,
    ViolationFlagComponent,
    CandidateComponent,
    AverageSkillComponent,
    LoginComponent,
    ArrToStringPipe,
    BucketFilterPipe,
    FilterByPipe,
    GraphDataPipe,
    OrderByPipe,
    SearchPipe,
    TierPipe,
    AverageBucketTypeComponent,
    MasterReportComponent,
    ReportSidebarComponent,
    ViolationsByTypeComponent
  ],
  providers: [
    AlertsService,
    BucketsService,
    NgbActiveModal,
    CookieService,
    QuestionScoreService,
    QuestionsService,
    ScreeningStateService,
    ScheduledScreeningService,
    ScreeningService,
    RoleGuard,
    SkillTypesService,
    SkillTypeBucketService,
    SoftSkillsService,
    SoftSkillsViolationService,
    UrlService,
    ViolationTypeService,
    NgbTabsetConfig,
    AuthenticationService,
    AmplifyService,
     { provide: HTTP_INTERCEPTORS, useClass: SpringInterceptor, multi: true }
  ],
  bootstrap: []
};
