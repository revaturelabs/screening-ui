import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningComponent } from './screening.component';
import { RouterOutlet, ChildrenOutletContexts } from '@angular/router';
import { Dependencies } from 'src/app/caliber.test.module';

// Author: David Gustafson

describe('ScreeningComponent', () => {
  let component: ScreeningComponent;
  let fixture: ComponentFixture<ScreeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies)
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
