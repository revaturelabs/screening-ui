// modules
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgxPaginationModule, PaginatePipe } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// routing
import { routes } from './app.routes';
import { SpringInterceptor } from './interceptors/spring.interceptor';

// services
import { AlertsService } from './services/alert-service/alerts.service';
import { ScreeningStateService } from './services/screening-state/screening-state.service';
import { TracksService } from './services/tracks/tracks.service';
import { ScreeningService } from './services/screening/screening.service';
import { TrackCategoryService } from './services/track-category/track-category.service';
import { QuestionsService } from './services/questions/questions.service';
import { CategoriesService } from './services/categories/categories.service';
import { UrlService } from './services/urls/url.service';
import { ScheduledScreeningService } from './services/scheduled-screening/scheduled-screening.service';

// pipes
import { SearchPipe } from './pipes/search.pipe';

// components
import { IntroductionComponent } from './components/introduction/introduction.component';
import { AnswerComponent } from './components/answer/answer.component';
import { PassFailComponent } from './components/pass-fail/pass-fail.component';
import { ViolationFlagComponent } from './components/violation-flag/violation-flag.component';
import { ScreeningConfigComponent } from './components/screening-config/screening-config.component';
import { TracksComponent } from './components/tracks/tracks.component';
import { TrackCategoriesComponent } from './components/track-categories/track-categories.component';
import { QuestionComponent } from './components/question/question.component';
import { AuthenticationService } from './services/authentication/authentication.service';

// import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';

export const Dependencies = {
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
    // ChartsModule,
    ReactiveFormsModule,
    // SimpleNotificationsModule.forRoot(),
    NgxPaginationModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  declarations: [
    // pipes
    SearchPipe,

    // components
    ScreeningConfigComponent,
    IntroductionComponent,
    AnswerComponent,
    PassFailComponent,
    ViolationFlagComponent,
    TracksComponent,
    TrackCategoriesComponent,
    QuestionComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpringInterceptor, multi: true }, // interceptor for all HTTP requests
    QuestionsService,
    CategoriesService,
    ScreeningStateService,
    TracksService,
    ScreeningService,
    TrackCategoryService,
    ScheduledScreeningService,
    HttpClient,
    NgbModal,
    AlertsService,
    NgbActiveModal,
    { provide: Router, useValue: {} },
    UrlService,
    AuthenticationService
  ],
  bootstrap: [],
  exports: [ViolationFlagComponent, PaginatePipe],
  entryComponents: []
};
