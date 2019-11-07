import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportVisualComponent } from './report-visual.component';

describe('ReportVisualComponent', () => {
  let component: ReportVisualComponent;
  let fixture: ComponentFixture<ReportVisualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportVisualComponent ]
    })
    .compileComponents();
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
