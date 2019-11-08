import { Injectable } from '@angular/core';
import { UrlService } from '../urls/url.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { stringifyDate } from '../../util/utils';
import { ReportData } from '../../entities/ReportData';
import { Screening } from '../../entities/Screening';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor(private urlService: UrlService, private http: HttpClient) {}

  getScreenersByPartialEmail(partialEmail: string): Observable<string[]> {
    if (partialEmail === '') {
      return of([]);
    } else {
      return this.http.get<string[]>(
        this.urlService.reports.getScreenersByPartialEmail(partialEmail)
      );
    }
  }

  getAllScreeners(): Observable<Screening> {
    return this.http.get<Screening>(this.urlService.reports.getAllScreeners());
  }

  getScreenerDataByWeeks(
    startDate: string,
    endDate: string,
    email: string
  ): Observable<ReportData> {
    if (startDate === '' || email === '') {
      return null;
    }
    if (endDate === '') {
      endDate = stringifyDate(new Date());
    }
    // this line exists because all the data on the server is more than 1yr old
    // weeks = weeks + 52;
    return this.http.get<ReportData>(
      this.urlService.reports.getScreenerDataByWeeks(startDate, endDate, email)
    );
  }

  getAllScreenerDataByWeeks(
    startDate: string,
    endDate: string
  ): Observable<ReportData> {
    // this line cause all data on server more than 1yr old
    // weeks = weeks + 52;
    return this.http.get<ReportData>(
      this.urlService.reports.getAllScreenerDataByWeeks(startDate, endDate)
    );
  }
}
