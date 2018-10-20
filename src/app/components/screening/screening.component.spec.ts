import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningComponent } from './screening.component';
//import { SkillTypeBuckets } from ''

import { RouterOutlet, ChildrenOutletContexts } from '@angular/router';
import { SkillTypeBucketsComponent } from '../skillType-buckets/skillType-buckets.component';
import { FormsModule } from '@angular/forms';

// Author: David Gustafson

describe('ScreeningComponent', () => {
  let component: ScreeningComponent;
  let fixture: ComponentFixture<ScreeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreeningComponent, RouterOutlet, SkillTypeBucketsComponent ],
      imports: [FormsModule],
      providers: [ ChildrenOutletContexts ]
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
