import { Injectable } from '@angular/core';
import { UrlService } from '../urls/url.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { EMAILS } from 'src/app/mock-data/mock-emails'
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
    return this.http.get<ReportData>(this.urlService.reports.getScreenerDataByWeeks(weeks, email));
  }    
  getAllScreenerDataByWeeks(weeks: number): Observable<ReportData> {
    return this.http.get<ReportData>(this.urlService.reports.getAllScreenerDataByWeeks(weeks));
  }
}
