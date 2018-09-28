import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertsComponent } from './alerts.component';
import { AlertsService } from '../services/alerts.service';
import { XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { NotificationsService } from 'angular2-notifications-lite';
import { Dependencies } from '../caliber.test.module';

/**
 * Author: Jordan Young
 */

describe('AlertsComponent', () => {
  let component: AlertsComponent;
  let fixture: ComponentFixture<AlertsComponent>;

  // set up
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertsComponent],
      imports: [],
      providers: [AlertsService, NotificationsService]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // tests for showNotif()

  // case 1: error alert
  it('should show error', inject([AlertsService, NotificationsService],
    (aService: AlertsService, nService: NotificationsService) => {
      aService.error('this is a test');
      // component.showNotif();
      expect(component.message.text).toBe('this is a test');
  }));

  // case 2: success alert
  it('should show success', inject([AlertsService, NotificationsService],
    (aService: AlertsService, nService: NotificationsService) => {
      aService.success('this is a test');
      // component.showNotif();
      expect(component.message.text).toBe('this is a test');
  }));
});
