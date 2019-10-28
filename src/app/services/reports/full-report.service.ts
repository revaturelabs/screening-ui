import { Injectable } from '@angular/core';
import { UrlService } from '../urls/url.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { stringifyDate } from '../../util/utils';
import { ReportData } from '../../entities/ReportData';
import { Screening } from '../../entities/Screening';

@Injectable({
  providedIn: 'root'
})
export class FullReportService {
  constructor(
    private urlService: UrlService,
    private http: HttpClient
  ) { }

 /* getAllReports(dateStart: string, dateEnd: string, screenerId: number): Observable<ReportData> {
    return this.http.get<ReportData>(this.urlService.reports.getAllReports());
  } */
  getAllReports(): Observable<any> {
    return this.http.get(this.urlService.reports.getAllReports());
  }
  getAllReportsByDate(dateStart: string, dateEnd: string): Observable<any> {
    return this.http.get(this.urlService.reports.getAllReportsByDate(dateStart, dateEnd));
  }
}