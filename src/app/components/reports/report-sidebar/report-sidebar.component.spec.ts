import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSidebarComponent } from './report-sidebar.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UrlService } from 'src/app/services/urls/url.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

describe('ReportSidebarComponent', () => {
  let component: ReportSidebarComponent;
  let fixture: ComponentFixture<ReportSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, NgbModule.forRoot(), HttpModule, HttpClientModule],
      declarations: [ ReportSidebarComponent],
      providers:[UrlService]
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
