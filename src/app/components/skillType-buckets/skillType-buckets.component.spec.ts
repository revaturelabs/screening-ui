import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillTypeBucketsComponent } from './skillType-buckets.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { BucketsService } from '../../services/buckets/buckets.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UrlService } from '../../services/urls/url.service';
import { QuestionsService } from '../../services/questions/questions.service';
import { AlertsService } from '../../services/alert-service/alerts.service';




describe('SkillTypeBucketsComponent', () => {
  let component: SkillTypeBucketsComponent;
  let fixture: ComponentFixture<SkillTypeBucketsComponent>;
  class MockRouter {
    navigate = jasmine.createSpy('navigate');
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillTypeBucketsComponent ],
      imports: [FormsModule, RouterModule],
      providers: [{provide: Router, useClass: MockRouter}, BucketsService, HttpClient, HttpHandler, UrlService, QuestionsService, AlertsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillTypeBucketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
