import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {ScreenerBucket} from '../../entities/ScreenerBucket';


/*

*/
@Injectable()
export class ScreenerBucketsService {

  constructor() { }

  getScreenerBuckets(): Observable<ScreenerBucket[]> {
    return null;
  }

}
