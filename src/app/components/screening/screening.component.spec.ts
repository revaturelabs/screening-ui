import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningComponent } from './screening.component';
//import { SkillTypeBuckets } from ''

import { SkillTypeBucketsComponent } from '../skillType-buckets/skillType-buckets.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UrlService } from '../../services/urls/url.service';
import { Router } from '@angular/router';



// Author: David Gustafson

describe('ScreeningComponent', () => {
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  let component: ScreeningComponent;
  let fixture: ComponentFixture<ScreeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreeningComponent, SkillTypeBucketsComponent ],
      imports: [FormsModule, RouterTestingModule],
      providers: [HttpClient, HttpHandler, UrlService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
