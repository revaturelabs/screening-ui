import { Injectable } from '@angular/core';

@Injectable()
export class GambitBatchUtilService {

  constructor() { }
  /**
     * Calculate current week using current date
     * and start date in miliseconds
     *
     * @param batch
     */
  public getWeek(batch: any) {
    return Math.floor(((Date.now() - new Date(batch.startDate).getTime()) / 6.048e8) + 1);
    // return ((Date.now() - batch.startDate.getMilliseconds()) / 6.048e8);

  }

}
