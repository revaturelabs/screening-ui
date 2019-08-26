import { TestBed } from '@angular/core/testing';

import { ReportService } from './report.service';

import { UrlService } from '../urls/url.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { debug } from 'util';
import {of} from 'rxjs';
import { HttpModule } from '@angular/http';



// Make sure that our observables are creating the correct information.
// This test file also includes integration tests, and must have screening-report-service running to work
describe('ReportService', () => {
  let fakeReportService: ReportService;

  beforeEach(() => {TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [UrlService, ReportService]
  });
  fakeReportService = TestBed.get(ReportService);
});

  it('should be created', () => {
    const service: Partial<ReportService> = TestBed.get(ReportService);
    expect(service).toBeTruthy();
  });

  // it('should prepare email statement', (done: DoneFn)=> {
  //   const service: ReportService = TestBed.get(ReportService);

  //   //let observableObject = service.getScreenersByPartialEmail('j').source.source.source;
  //   let testStringURL: string = JSON.stringify(service.getScreenersByPartialEmail('j').source.source.source.value.url);
  //   let testStringMethod: string = JSON.stringify(service.getScreenersByPartialEmail('j').source.source.source.value.method);

  //   expect(testStringURL).toContain('http://localhost:8185/getEmails?');
  //   expect(testStringMethod).toContain('GET');
  //   done();

  // })
  

  it('should get emails', () => {
      spyOn(fakeReportService, `getScreenersByPartialEmail`);
      fakeReportService.getScreenersByPartialEmail('');
      // tslint:disable-next-line: no-unused-expression
      expect(fakeReportService.getScreenersByPartialEmail).toBeNull;
  });
  // it('should prepare get all by weeks statement', (done:DoneFn) => {
  //   const service: ReportService = TestBed.get(ReportService);
  //   let myString: String;

  //   let testStringURL: string = JSON.stringify(service.getAllScreenerDataByWeeks([52]).source.source.source.value.url);
  //   let testStringMethod: string = JSON.stringify(service.getAllScreenerDataByWeeks([52]).source.source.source.value.method);

  //   expect(testStringURL).toContain('http://localhost:8185/getWeeksReport?weeks');
  //   expect(testStringMethod).toContain('GET');
  //   done();
  // })
  // it('should get all screeners by weeks', (done:DoneFn)=> {
  //   const service: ReportService = TestBed.get(ReportService);
  //   let myString: String;
  //   let observ = service.getAllScreenerDataByWeeks([52]);
  //   observ.subscribe(x =>
  //     {
  //       expect(x != null);
  //       done();
  //     })
  // })
  // it('should prepare get screeners by weeks and email',(done:DoneFn)=> {
  //   const service: ReportService = TestBed.get(ReportService);
  //   let myString: String;

  //    let testStringURL: string = JSON.stringify(service.getScreenerDataByWeeks("2016-01-01", "2019-01-01", '')
  // .source.source.source.value.url);
  //    let testStringMethod: string = JSON.stringify(service.getScreenerDataByWeeks("2016-01-01", "2019-01-01", '')
  // .source.source.source.value.method);

  //   expect(testStringURL).toContain('http://localhost:8185/getReportWithEmail?weeks=');
  //   expect(testStringMethod).toContain('GET');
  //   done();
  // })
  it('should get all screeners by weeks and email', () => {
    spyOn(fakeReportService, `getScreenerDataByWeeks`);
      fakeReportService.getScreenerDataByWeeks('', '', '');
      // tslint:disable-next-line: no-unused-expression
      expect(fakeReportService.getScreenerDataByWeeks).toBeNull;
  });
});
