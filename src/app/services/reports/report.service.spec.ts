import { TestBed } from '@angular/core/testing';

import { ReportService } from './report.service';
import { UrlService } from '../urls/url.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [UrlService, HttpClient, HttpHandler]
  }));

  it('should be created', () => {
    const service: ReportService = TestBed.get(ReportService);
    expect(service).toBeTruthy();
  });

  it('should get emails', ()=> {
    const service: ReportService = TestBed.get(ReportService);
    let myString: String;
    service.getScreenersByPartialEmail('j').subscribe(x => {
      console.log(x);
      myString = x[0];
    });
    expect(myString).toBeTruthy();
  })
});
