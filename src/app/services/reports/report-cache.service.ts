import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ReportData } from 'src/app/entities/ReportData';

@Injectable({
  providedIn: 'root'
})
export class ReportCacheService {
  cacheMap;
  constructor() { }

  invalidateCache() {
    this.cacheMap = {};
  }

  getScreenersByPartialEmail(partialEmail: string): Observable<string[]> {
    if (this.cacheMap.has([partialEmail]))
      return this.cacheMap[partialEmail];
 
  // }
  // getScreenerDataByWeeks(weeks: number, email: string): Observable<ReportData> {

  // }    

  // getAllScreenerDataByWeeks(weeks: number): Observable<ReportData> {

  // }
  }



}
