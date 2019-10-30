import { Injectable } from '@angular/core';
import { UrlService } from '../urls/url.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { stringifyDate } from '../../util/utils';
import { ReportData } from '../../entities/ReportData';
import { Screening } from '../../entities/Screening';
import { SimpleReportModel } from '../../entities/SimpleReportModel';

@Injectable({
  providedIn: 'root'
})
export class SimpleReportService {
  constructor(
    private urlService: UrlService,
    private http: HttpClient
  ) { }

  getAllSimpleReports(): Observable<SimpleReportModel> {
    return this.http.get<SimpleReportModel>(this.urlService.reports.getAllSimpleReports());
  }
  getAllSimpleReportsByDate(dateStart: string, dateEnd: string): Observable<SimpleReportModel> {
    return this.http.get<SimpleReportModel>(this.urlService.reports.getAllSimpleReportsByDate(dateStart, dateEnd));
  }
}
