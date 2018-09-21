import { TestBed, inject } from '@angular/core/testing';
import { AlertsService } from './alerts.service';
import { Observable } from 'rxjs/Observable';

/**
 * Author: Jordan Young
 */

describe('AlertsService', () => {

  // set up
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertsService]
    });
  });

  // default test
  it('should be created', inject([AlertsService], (service: AlertsService) => {
    expect(service).toBeTruthy();
  }));

  // test the getMessage()
  it('has working getMessage', inject([AlertsService], (service: AlertsService) => {
    expect(service.getMessage()).toBeTruthy();
  }));

  // test the error() in the service
  it('has working error messaging', inject([AlertsService], (service: AlertsService) => {
    service.error('this is a test');
    let msg = '';
    let type = '';
    service.getMessage().subscribe((s) => {
      type = s.type;
      msg = s.text;
      expect(type).toEqual('error');
      expect(msg).toEqual('this is a test');
    });
  }));

  // test the success() in the service
  it('has working success messaging', inject([AlertsService], (service: AlertsService) => {
    service.success('this is a test');
    let msg = '';
    let type = '';
    service.getMessage().subscribe((s) => {
      type = s.type;
      msg = s.text;
      expect(type).toEqual('success');
      expect(msg).toEqual('this is a test');
    });
  }));
});
