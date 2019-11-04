import { Injectable } from '@angular/core';
import { UrlService } from '../urls/url.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { SimpleReportModel } from '../../entities/SimpleReportModel';
import { FullReportModel } from '../../entities/FullReportModel';

@Injectable({
  providedIn: 'root'
})
export class FullReportService {
  constructor(
    private urlService: UrlService,
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    })
  };

  getFullReportsByScreeningId(screeningId: string): Observable<FullReportModel> {
    return this.http.get<FullReportModel>(this.urlService.reports.getAllFullReportByScreeningId(screeningId));
  }
}