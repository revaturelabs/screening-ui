import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {ScreenerBucket} from '../../entities/screenerBucket';
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
