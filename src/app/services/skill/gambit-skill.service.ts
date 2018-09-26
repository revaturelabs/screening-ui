import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GambitSkill } from '../../entities/GambitSkill';
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
  public findAll(): Observable<GambitSkill[]> {
    return this.httpClient.get<GambitSkill[]>(this.urls.skills.findAll());
  }

  /**
  * retrieves all ACTIVE categories
  *
  * spring-security: @PreAuthorize("hasAnyRole('VP', 'QC', 'TRAINER', 'STAGING','PANEL')")
  */
  public findAllActive(): Observable<GambitSkill[]> {
    return this.httpClient.get<GambitSkill[]>(this.urls.skills.findAllActive());
  }

  /**
  * retrieves a Skill by its ID
  *
  * spring-security: @PreAuthorize("hasAnyRole('VP', 'QC', 'TRAINER', 'STAGING','PANEL')")
  *
  * @param id: number
  * @return Observable<GambitSkill>
  */
  public findById(id: number): Observable<GambitSkill> {
    return this.httpClient.get<GambitSkill>(this.urls.skills.findById(id));
  }

  /**
   * Retrieves a skill by its name.
   *
   * spring-security: @PreAuthorize("hasAnyRole('VP', 'QC', 'TRAINER', 'STAGING','PANEL')")
   *
   * @param name
   * @return Observable<GambitSkill>
   */
  public findByName(name: string): Observable<GambitSkill> {
    return this.httpClient.get<GambitSkill>(this.urls.skills.findByName(name));
  }

  /**
  * transmits a new Skill to be created.
  *
  * spring-security: @PreAuthorize("hasAnyRole('VP')")
  *
  * @param skill: Skill
  */
  public create(skill: GambitSkill): Observable<GambitSkill> {
    return this.httpClient.post<GambitSkill>(this.urls.skills.save(), JSON.stringify(skill));
  }

  /**
   * @author Michael Adedigba | 1803-USF-MAR26 | Wezley Singleton
   *
   * Rewrote to map to correct endpoint
   *
   * @param skill: Skill
   */
  public update(skill: GambitSkill): Observable<GambitSkill> {
    return this.httpClient.put<GambitSkill>(this.urls.skills.update() + '/' + skill.skillID, JSON.stringify(skill));
  }

  /**
   * Transmits a Skill to be deleted from the database.
   *
   * @param skill: GambitSkill
   */
  public delete(skill: GambitSkill): Observable<boolean> {
    return this.httpClient.delete<boolean>(this.urls.skills.delete(skill.skillID));
  }
}
