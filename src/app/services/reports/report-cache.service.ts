import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ReportData } from 'src/app/entities/ReportData';
import { ReportService } from 'src/app/services/reports/report.service';

@Injectable({
  providedIn: 'root'
})
export class ReportCacheService {
  cacheMap: object = new Object();
  constructor(private reportService: ReportService) { }

  invalidateCache() {
    this.cacheMap = new Object();
  }

  getScreenersByPartialEmail(partialEmail: string): Observable<string[]> {
    let key = `$partialEmail=${partialEmail}`;
    if (key in this.cacheMap){
      console.log(`Retrieving ${key} from cache`);
      return of(this.cacheMap[key]);
    }      
    else{
      console.log(`Requesting ${key} from server`);
      return this.reportService.getScreenersByPartialEmail(partialEmail).pipe(
        tap(data => this.cacheMap[key] = data),);
    }
  }
 
  getScreenerDataByWeeks(weeks: number, email: string): Observable<ReportData> {
    let key = `$weeks=${weeks}&email=${email}`;
    if (key in this.cacheMap){
      console.log(`Retrieving ${key} from cache`);
      return of(this.cacheMap[key]);
    }    
    else{      
      console.log(`Requesting ${key} from server`); 
      return this.reportService.getScreenerDataByWeeks(weeks, email).pipe(
        tap(data => this.cacheMap[key] = data));
    }
  }  

  getAllScreenerDataByWeeks(weeks: number): Observable<ReportData> {
    let key = `weeks=${weeks}`;
    if (key in this.cacheMap){
      console.log(`Retrieving ${key} from cache`);
      return of(this.cacheMap[key]);
    }      
    else{      
      console.log(`Requesting ${key} from server`); 
      return this.reportService.getAllScreenerDataByWeeks(weeks).pipe(
       tap(data => this.cacheMap[key] = data));
    }
  }
}
