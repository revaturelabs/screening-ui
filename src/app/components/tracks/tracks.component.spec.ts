import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TracksComponent } from './tracks.component';
import { TracksService } from '../../services/tracks/tracks.service';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UrlService } from '../../services/urls/url.service';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { AmplifyService } from 'aws-amplify-angular';
import { AlertsService } from '../../services/alert-service/alerts.service';
import { TrackCategoryService } from '../../services/track-category/track-category.service';
import { CategoriesService } from '../../services/categories/categories.service';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';

describe('TracksComponent', () => {
  let component: TracksComponent;
  let fixture: ComponentFixture<TracksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
      declarations: [TracksComponent],
      providers: [
        CategoriesService,
        TracksService,
        AuthenticationService,
        AmplifyService,
        AlertsService,
        UrlService,
        TrackCategoryService,
        NgbTabset
      ]
    });

    fixture = TestBed.createComponent(TracksComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
