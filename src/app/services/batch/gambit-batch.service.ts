import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Interfaces


// entities
import { UrlService } from '../urls/url.service';


import { GambitBatch } from '../../entities/GambitBatch';

  /**
   * finishing the conversion from HydraBatch to GambitBatch
   *
   * @author Alex Pich | 1803-USF-MAR26 | Wezley Singleton
   *
   * @author Danny S Chhun | 1803-USF-MAR26 | Wezley Singleton
   *
   * @author Michael Adedigba | 1803-USF-MAR26 | Wezley Singleton
   *
   * @author Pedro De Los Reyes | 1803-USF-MAR26 | Wezley Singleton
   */

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

/**
 * this service manages calls to the web service
 * for Batch objects
 */
@Injectable()
export class GambitBatchService {

  constructor(public http: HttpClient, private urls: UrlService) {

  }

  /*
    =====================
    BEGIN: API calls
    =====================
  */

  /**
   * retrieves all training batches regardless of the trainer
   * and returns the HTTP request as an Observable
   *
   * spring-security: @PreAuthorize("hasAnyRole('VP', 'QC', 'STAGING', 'PANEL')")
   *
   * @returns Observable
   */
  public fetchAll() {
    return this.http.get<GambitBatch[]>(this.urls.batches.fetchAll());
  }

  /**
   * retrieves the batches that belong to the currently
   * authenticated trainer and returns the HTTP request as an Observable
   *
   * spring-security: @PreAuthorize("hasAnyRole('VP', 'TRAINER', 'STAGING', 'PANEL')")
   *
   * @returns Observable
   */
  public fetchAllByTrainerId(id: number) {
    return this.http.get<GambitBatch[]>(this.urls.batches.fetchAllByTrainerId(id));
  }

  /**
  * @overloaded
  * @see save()
  *
  * transmits a batch to be saved in persistent
  * storage on the server and returns the HTTP request as an Observable
  *
  * spring-security: @PreAuthorize("hasAnyRole('VP', 'QC', 'TRAINER', 'PANEL')")
  *
  * @param batch: Batch
  */
  public create(batch: GambitBatch) {
    return this.http.post<GambitBatch>(this.urls.batches.save(), JSON.stringify(this.prepareForApi(batch)), httpOptions);
  }




  /**
   * transmits a Batch object to be updated and
   * returns the HTTP request as an Observable
   *
   * spring-security: @PreAuthorize("hasAnyRole('VP', 'QC', 'TRAINER', 'PANEL')")
   *
   * @param batch: Batch
   *
   * @returns Observable
   */
  public update(batch: GambitBatch) {
    return this.http.put<GambitBatch>(this.urls.batches.update(), JSON.stringify(this.prepareForApi(batch)), httpOptions);
  }

  /**
   * transmits a batch object to be deleted and
   * returns the HTTP request as an Observable
   *
   * spring-security: @PreAuthorize("hasAnyRole('VP')")
   *
   * @param batch: Batch
   *
   * @returns Observable
   */
  public delete(batch: GambitBatch) {
    return this.http.delete<GambitBatch>(this.urls.batches.delete(batch.batchId), httpOptions);
  }

  /**
   * produces a clone of the batch object that
   * has changes required for the API in order
   * to be processed
   *
   * @param batch: Batch
   *
   * @return any
   */
  protected prepareForApi(batch: GambitBatch) {
    // let output: GambitBatch = {};
    // Object.assign(output, batch);

    // output.startDate = stringifyDate(batch.startDate);
    // output.endDate = stringifyDate(batch.endDate);

    // return output;
  }

}
