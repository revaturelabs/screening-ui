import { Injectable } from '@angular/core';
import { UrlService } from '../urls/url.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { EMAILS } from 'src/app/mock-data/mock-emails'
import { MockAllScreeners, MockSingleScreeners } from 'src/app/mock-data/mock-reports';
import { ReportData } from 'src/app/entities/ReportData';


@Injectable({
  providedIn: 'root'
})
export class ReportService {
  debug = true;
  constructor(
    private urlService: UrlService,
    private http: HttpClient
    ) { }

  getScreenersByPartialEmail(partialEmail: string): Observable<string[]> {
    // console.log('In getScreenersByEmail');
    if (partialEmail === '')
      return of([]);
    else if (this.debug) {
      let partials = of(EMAILS.filter(email => email.startsWith(partialEmail)))
      // console.log(partials);
      return partials
    }    
    else 
      return this.http.get<string[]>(this.urlService.reports.getScreenersByPartialEmail(partialEmail));
  }
  getScreenerDataByWeeks(weeks: number, email: string): Observable<ReportData> {
    if (this.debug) {
      switch(weeks) {
        case 52: weeks = 5; break;
        case 26: weeks = 4; break;
        default: weeks -= 1; break;
      }
      let data = MockSingleScreeners[weeks];
      let nameTokens = email.split(/[.@]+/);
      // let name = `${nameTokens[1]}, ${nameTokens[0]}`;
      let name = `${nameTokens[0]} ${nameTokens[1]}`;
      data.screener = { name: name, email: email};
      return of(data);
    }
    else
      return this.http.get<ReportData>(this.urlService.reports.getScreenerDataByWeeks(weeks, email));
  }    

  getAllScreenerDataByWeeks(weeks: number): Observable<ReportData> {
    if (this.debug) {
      switch(weeks) {
        case 52: weeks = 5; break;
        case 26: weeks = 4; break;
        default: weeks -= 1; break;
      }
      let data = MockAllScreeners[weeks];
      return of(data);
    }
    else
      return this.http.get<ReportData>(this.urlService.reports.getAllScreenerDataByWeeks(weeks));
  }
}
