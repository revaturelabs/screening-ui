import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {ScreenerBucket} from '../../entities/ScreenerBucket';
import { SCREENERBUCKETS } from '../../mock-data/mock-screenerBuckets';

/*

*/
@Injectable()
export class ScreenerBucketsService {

  constructor() { }

  getScreenerBuckets(): Observable<ScreenerBucket[]> {
    return of(SCREENERBUCKETS);
  }

}
