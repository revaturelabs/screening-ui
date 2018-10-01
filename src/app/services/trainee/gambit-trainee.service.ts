import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlService } from '../urls/url.service';
import { GambitTrainee } from '../../entities/GambitTrainee';

/**
 * This service is used for consuming Gambit API resources dealing with trainees.
 *
 * @export
 * @class GambitTraineeService
 */
@Injectable()
export class GambitTraineeService {

  constructor(private httpClient: HttpClient, private urlService: UrlService) { }

  /**
   * Requests all trainees with the input batch id and returns an observable.
   *
   * Possibly a legacy function so we did not consolidate this with fetchAllByBatch (Blake's class, 1801)
   *
   * @param batchId
   * @param status
   *
   * @returns {Observable<GambitTrainee[]>}
   */
  public findAllByBatchAndStatus(id: number, status: string): Observable<GambitTrainee[]> {
    const url = this.urlService.trainees.findAllByBatchAndStatus(id, status);
    return this.httpClient.get<GambitTrainee[]>(url);
  }

  /**
  * Saves the newly created trainee and returns the Observable.
  *
  * spring-security: @PreAuthorize("hasAnyRole('VP', 'QC', 'TRAINER', 'PANEL')")
  *
  * @param trainee: GambitTrainee
  * @returns {Observable<GambitTrainee>}
  */
  public create(trainee: GambitTrainee): Observable<GambitTrainee> {
    const url = this.urlService.trainees.save();
    return this.httpClient.post<GambitTrainee>(url, trainee);
  }

  /**
   * Updates a trainee and returns the Observable.
   *
   * spring-security: @PreAuthorize("hasAnyRole('VP', 'QC', 'TRAINER','PANEL')")
   *
   * @param trainee: GambitTrainee
   * @returns {Observable<GambitTrainee>}
   */
  public update(trainee: GambitTrainee): Observable<GambitTrainee> {
    const url = this.urlService.trainees.update();
    return this.httpClient.put<GambitTrainee>(url, trainee);
  }

  /**
  * Deletes a trainee and returns the Observable.
  *
  * spring-security: @PreAuthorize("hasAnyRole('VP', 'QC', 'TRAINER','PANEL')")
  *
  * @param trainee: GambitTrainee
  * @returns {Observable<GambitTrainee>}
  */
  public delete(traineeId: number): Observable<GambitTrainee> {
    const url = this.urlService.trainees.delete(traineeId);
    return this.httpClient.delete<GambitTrainee>(url);
  }
}
