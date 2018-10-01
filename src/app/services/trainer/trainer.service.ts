import { Injectable } from '@angular/core';

// entities




// rxjs
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GambitTrainer } from '../../entities/GambitTrainer';
import { UrlService } from '../urls/url.service';
import { UserRole } from '../../entities/UserRole';


@Injectable()
export class TrainerService {

  public currentTrainer = new GambitTrainer();

  constructor(private httpClient: HttpClient, private urls: UrlService) { }


  /*
    =================================
    GET API CALLS
    =================================
  */

  /**
  * sets current trainer stored on this service
  *
  * @param trainer: GambitTrainer
  */

  public changeCurrentTrainer(trainer: GambitTrainer) {
    this.currentTrainer = trainer;
    return this.httpClient.get<GambitTrainer>(this.urls.trainers.fetchByEmail(trainer.email));
  }

  /**
     * retrieves all trainers and pushes them on the
     * returns GambitTrainer[] Observable
     *
     * spring-security: @PreAuthorize("hasAnyRole('VP', 'TRAINER', 'STAGING', 'QC', 'PANEL')")
     */

  public fetchAll(): Observable<GambitTrainer[]> {
    const url = this.urls.trainers.fetchAll();
    return this.httpClient.get<GambitTrainer[]>(url);

  }
  /**
      * retrieves trainer with given email address
      * returns GambitTrainer Observable
      *
      * spring-security: @PreAuthorize("hasAnyRole('VP', 'TRAINER', 'STAGING', 'QC', 'PANEL')")
      *
      * @param email: String
      */

  public fetchByEmail(email: string) {
    const url = this.urls.trainers.fetchByEmail(email);
    return this.httpClient.get<GambitTrainer>(url);
  }

  /**
     * Retrieves all titles for trainers
     * returns String[] Observable
     *
     * spring-security: @PreAuthorize("hasAnyRole('VP')")
     *
     */

  public fetchTitles(): Observable<String[]> {
    const url = this.urls.trainers.getTitles();
    return this.httpClient.get<String[]>(url);

  }
  /**
     * Retrieves all roles for trainers
     * returns String[] Observable
     *
     * spring-security: @PreAuthorize("hasAnyRole('VP')")
     *
     */

  public fetchRoles(): Observable<UserRole[]> {
    const url = this.urls.users.getAllUsersRoles();
    return this.httpClient.get<UserRole[]>(url);
  }

  /*
    =================================
    POST API CALLS
    =================================
  */
  /**
     * creates a trainer and pushes the created trainer on the
     * returns saved GambitTrainer observable
     *
     * spring-security: @PreAuthorize("hasAnyRole('VP')")
     *
     * @param trainer: GambitTrainer
     */

  public create(trainer: GambitTrainer): Observable<GambitTrainer> {
    return this.httpClient.post<GambitTrainer>(this.urls.trainers.save(), trainer);
  }

  /*
  =================================
  PUT API CALLS
  =================================
*/

  /**
     * updates a trainer and pushes the updated trainer on the
     * returnupdated GambitTrainer observable
     *
     * spring-security: @PreAuthorize("hasAnyRole('VP')")
     *
     * @param trainer: GambitTrainer
     */

  public update(trainer: GambitTrainer): Observable<GambitTrainer> {
    this.currentTrainer = trainer;
    return this.httpClient.put<GambitTrainer>(this.urls.trainers.update(), trainer);
  }

  /**
   * Makes a trainer inactive and pushes the updated trainer on the
   * observable
   * @param trainer
   */
  public makeInactive(trainer: GambitTrainer): Observable<GambitTrainer> {
    this.currentTrainer = trainer;
    return this.httpClient.put<GambitTrainer>(this.urls.users.makeInactive(), trainer);
  }
}
