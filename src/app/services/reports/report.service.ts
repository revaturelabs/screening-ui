import { Injectable } from '@angular/core';
import { UrlService } from '../urls/url.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
class ScreenerData {

}

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
  getScreenerDataByWeeks(weeks: number, email: string): Observable<ScreenerData> {
    return this.http.get<ScreenerData>(this.urlService.reports.getScreenerDataByWeeks(weeks, email));
  }    
  getAllScreenerDataByWeeks(weeks: number): Observable<ScreenerData> {
    return this.http.get<ScreenerData>(this.urlService.reports.getAllScreenerDataByWeeks(weeks));
  }
}
