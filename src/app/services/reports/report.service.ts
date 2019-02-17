import { Injectable } from '@angular/core';
import { UrlService } from '../urls/url.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
    return this.http.get<string[]>(this.urlService.reports.getScreenersByPartialEmail(partialEmail));
  }
  getScreenerDataByWeeks(weeks: number, email: string): Observable<ReportData> {
    return this.http.get<ReportData>(this.urlService.reports.getScreenerDataByWeeks(weeks, email));
  }    
  getAllScreenerDataByWeeks(weeks: number): Observable<ReportData> {
    return this.http.get<ReportData>(this.urlService.reports.getAllScreenerDataByWeeks(weeks));
  }
}
