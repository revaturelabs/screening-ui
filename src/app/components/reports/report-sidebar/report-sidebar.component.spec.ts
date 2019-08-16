import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSidebarComponent } from './report-sidebar.component';

describe('ReportSidebarComponent', () => {
  let component: ReportSidebarComponent;
  let fixture: ComponentFixture<ReportSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
