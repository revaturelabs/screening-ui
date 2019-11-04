
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HighchartsChartModule} from 'highcharts-angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ng5SliderModule } from 'ng5-slider';
import { NgModule } from '@angular/core';
import { AmplifyAngularModule } from 'aws-amplify-angular';
import {SpringInterceptor} from './interceptors/spring.interceptor';

import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { AnswerComponent } from './components/answer/answer.component';
import { AverageCategoryTypeComponent } from './components/reports/average-category-type/average-category-type.component';
import { AverageTrackComponent} from './components/reports/average-track/average-track.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { CandidatesScreeningListComponent } from './components/candidates-screening-list/candidates-screening-list.component';
import { FinalReportComponent } from './components/final-report/final-report.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { MasterReportComponent } from './components/reports/master-report/master-report.component';
import { NavComponent } from './components/nav/nav.component';
import { PassFailComponent } from './components/pass-fail/pass-fail.component';
import { QuestionComponent } from './components/question/question.component';
import { QuestionsTableComponent } from './components/questions-table/questions-table.component';
import { ReportSidebarComponent } from './components/reports/report-sidebar/report-sidebar.component';
import { ScreeningConfigComponent } from './components/screening-config/screening-config.component';
import { TrackCategoriesComponent } from './components/track-categories/track-categories.component';
import { TracksComponent } from './components/tracks/tracks.component';
import { ViolationsByTypeComponent } from './components/reports/violations-by-type/violations-by-type.component';
import { ViolationFlagComponent } from './components/violation-flag/violation-flag.component';
import { LoginComponent } from './components/login/login.component';


// Services
import { AlertsService } from './services/alert-service/alerts.service';
import { CategoriesService } from './services/categories/categories.service';
import { CookieService } from 'ngx-cookie-service';
import { FullReportService } from './services/reports/full-report.service';
import { QuestionScoreService } from './services/question-score/question-score.service';
import { QuestionsService } from './services/questions/questions.service';
import { ScheduledScreeningService } from './services/scheduled-screening/scheduled-screening.service';
import { ScreeningService } from './services/screening/screening.service';
import { ScreeningStateService } from './services/screening-state/screening-state.service';

import { TracksService } from './services/tracks/tracks.service';
import { TrackCategoryService } from './services/track-category/track-category.service';

import { SimpleReportService } from './services/reports/simple-report.service';


import { SoftSkillsService } from './services/soft-skills/soft-skills.service';
import { SoftSkillsViolationService } from './services/soft-skills-violation/soft-skills-violation.service';
import { UrlService } from './services/urls/url.service';
import { ViolationTypeService } from './services/violationType/violationType.service';
import {AuthenticationService} from './services/authentication/authentication.service';
import { AmplifyService } from 'aws-amplify-angular';

// Pipes
import { ArrToStringPipe } from './pipes/arr-to-string.pipe';
import { CategoryFilterPipe } from './pipes/track-categories.filter';
import { FilterByPipe } from './pipes/filter-by.pipe';
import { GraphDataPipe } from './pipes/graph-data.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from './pipes/search.pipe';
import { TierPipe } from './pipes/tier-pipe';


import { RoleGuard } from './role-guard';
import { ReportVisualComponent } from './components/reports/report-visual/report-visual.component';

@NgModule({
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
    TrackCategoriesComponent,
    TracksComponent,
    ViolationFlagComponent,
    CandidateComponent,
    AverageTrackComponent,
    LoginComponent,
    ArrToStringPipe,
    CategoryFilterPipe,
    FilterByPipe,
    GraphDataPipe,
    OrderByPipe,
    SearchPipe,
    TierPipe,
    AverageCategoryTypeComponent,
    MasterReportComponent,
    ReportSidebarComponent,
    ViolationsByTypeComponent,
    ReportVisualComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HighchartsChartModule,
    HttpClientModule,
    NgbModule,
    NgxPaginationModule,
    Ng5SliderModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    AmplifyAngularModule,
    MatDatepickerModule,
    MaterialModule
  ],
  providers: [
    AlertsService,
    CategoriesService,
    CookieService,
    FullReportService,
    QuestionScoreService,
    QuestionsService,
    ScreeningStateService,
    ScheduledScreeningService,
    ScreeningService,
    RoleGuard,

    TracksService,
    TrackCategoryService,

    SimpleReportService,

    SoftSkillsService,
    SoftSkillsViolationService,
    UrlService,
    ViolationTypeService,
    AuthenticationService,
    AmplifyService,
     { provide: HTTP_INTERCEPTORS, useClass: SpringInterceptor, multi: true }
  ],
  entryComponents: [ReportVisualComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
