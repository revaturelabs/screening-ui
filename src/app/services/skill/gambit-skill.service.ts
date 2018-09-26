import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Bucket } from '../../entities/Bucket';
import { UrlService } from '../urls/url.service';

/**
* this service manages calls to the web services
* for Skill objects
*/
@Injectable()
export class GambitSkillService {

  constructor(public httpClient: HttpClient, private urls: UrlService) {
  }

  /*
    =====================
    BEGIN: API calls
    =====================
  */

  /**
   * retrieves all categories
   *
   * spring-security: @PreAuthorize("hasAnyRole('VP', 'QC', 'TRAINER', 'STAGING','PANEL')")
   */
  public findAll(): Observable<Bucket[]> {
    return this.httpClient.get<Bucket[]>(this.urls.skills.findAll());
  }

  /**
  * retrieves all ACTIVE categories
  *
  * spring-security: @PreAuthorize("hasAnyRole('VP', 'QC', 'TRAINER', 'STAGING','PANEL')")
  */
  public findAllActive(): Observable<Bucket[]> {
    return this.httpClient.get<Bucket[]>(this.urls.skills.findAllActive());
  }

  /**
  * retrieves a Skill by its ID
  *
  * spring-security: @PreAuthorize("hasAnyRole('VP', 'QC', 'TRAINER', 'STAGING','PANEL')")
  *
  * @param id: number
  * @return Observable<Bucket>
  */
  public findById(id: number): Observable<Bucket> {
    return this.httpClient.get<Bucket>(this.urls.skills.findById(id));
  }

  /**
   * Retrieves a skill by its name.
   *
   * spring-security: @PreAuthorize("hasAnyRole('VP', 'QC', 'TRAINER', 'STAGING','PANEL')")
   *
   * @param name
   * @return Observable<Bucket>
   */
  public findByName(name: string): Observable<Bucket> {
    return this.httpClient.get<Bucket>(this.urls.skills.findByName(name));
  }

  /**
  * transmits a new Skill to be created.
  *
  * spring-security: @PreAuthorize("hasAnyRole('VP')")
  *
  * @param bucket: bucket
  */
  public create(bucket: Bucket): Observable<Bucket> {
    return this.httpClient.post<Bucket>(this.urls.skills.save(), JSON.stringify(bucket));
  }

  /**
   * @author Michael Adedigba | 1803-USF-MAR26 | Wezley Singleton
   *
   * Rewrote to map to correct endpoint
   *
   * @param bucket: bucket
   */
  public update(bucket: Bucket): Observable<Bucket> {
    return this.httpClient.put<Bucket>(this.urls.skills.update() + '/' + bucket.bucketId, JSON.stringify(bucket));
  }

  /**
   * Transmits a bucket to be deleted from the database.
   *
   * @param bucket: Bucket
   */
  public delete(bucket: Bucket): Observable<boolean> {
    return this.httpClient.delete<boolean>(this.urls.skills.delete(bucket.bucketId));
  }
}
