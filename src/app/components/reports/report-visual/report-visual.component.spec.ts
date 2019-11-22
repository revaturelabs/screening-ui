import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportVisualComponent } from './report-visual.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialogRef } from '@angular/material';

describe('ReportVisualComponent', () => {
  let component: ReportVisualComponent;
  let fixture: ComponentFixture<ReportVisualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReportVisualComponent],
      providers: [MatDialogRef],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
