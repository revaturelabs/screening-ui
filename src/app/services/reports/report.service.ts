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
  constructor(
    private urlService: UrlService,
    private http: HttpClient
    ) { }

  getScreenersByPartialEmail(partialEmail: string): Observable<string[]> {
    if (partialEmail === '') {
      return of([]);
    } else {
      return this.http.get<string[]>(`http://localhost:8185/getEmails?email=${partialEmail}`);
    }
  }
  getScreenerDataByWeeks(weeks: number, email: string): Observable<ReportData> {
    //this line exists because all the data on the server is more than 1yr old
    weeks = weeks + 52;
    return this.http.get<ReportData>(
        `http://localhost:8185/getReportWithEmail?weeks=${weeks}&email=${email}`);
  }    

  getAllScreenerDataByWeeks(weeks: number): Observable<ReportData> {
      //this line cause all data on server more than 1yr old
      weeks = weeks + 52;
      return this.http.get<ReportData>(`http://localhost:8185/getWeeksReport?weeks=${weeks}`);
  }
}
