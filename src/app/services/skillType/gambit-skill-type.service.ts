import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// rxjs
import { Observable } from 'rxjs';

// Entities
import { GambitSkillType } from '../../entities/GambitSkillType';
import { UrlService } from '../urls/url.service';

@Injectable()
export class GambitSkillTypeService {

  constructor(private http: HttpClient, private urls: UrlService) { }

  /**
   * Retrieves a skillType by its id.
   * @param id The id of the skillType
   */
  find(id: number): Observable<GambitSkillType> {
    return this.http.get<GambitSkillType>(this.urls.skillTypes.findById(id));
  }

  /**
   * Retrieves a skillType by its name.
   * @param name The name of the skillType
   */
  findByName(name: string): Observable<GambitSkillType> {
    return this.http.get<GambitSkillType>(this.urls.skillTypes.findByName(name));
  }

  /**
   * Retrieves all skillTypes.
   */
  findAll(): Observable<Array<GambitSkillType>> {
    return this.http.get<Array<GambitSkillType>>(this.urls.skillTypes.findAll());
  }

  /**
   * Retrieves all the active SkillTypes.
   */
  findAllActive(): Observable<Array<GambitSkillType>> {
    return this.http.get<Array<GambitSkillType>>(this.urls.skillTypes.findAllActive());
  }

  /**
   * Transmits a new skillType to be created.
   * @param skillType The SkillType to be created.
   */
  create(skillType: GambitSkillType): Observable<GambitSkillType> {
    return this.http.post<GambitSkillType>(this.urls.skillTypes.save(), JSON.stringify(skillType));
  }

  /**
   * Transmits a skillType to be updated.
   * @param skillType The skillType to be updated.
   */
  update(skillType: GambitSkillType): Observable<GambitSkillType> {
    return this.http.put<GambitSkillType>(this.urls.skillTypes.update(skillType.skillTypeId), JSON.stringify(skillType));
  }

  /**
   * Transmits a skillType to be deleted.
   * @param skillType The skillType to be deleted.
   */
  delete(skillType: GambitSkillType): Observable<boolean> {
    return this.http.delete<boolean>(this.urls.skillTypes.delete(skillType.skillTypeId));
  }

  /**
   * Adds a Skill to a SkillType.
   * @param skillTypeId The id of the SkillType.
   * @param skillId The id of the Skill.
   */
  addSkill(skillTypeId: number, skillId: number) {
    return this.http.put<void>(this.urls.skillTypes.saveSkill(skillTypeId, skillId), null);
  }

  /**
   * Adds a Skill to a SkillType.
   * @param skillTypeName The id of the SkillType.
   * @param skillName The id of the Skill.
   */
  addSkillByname(skillTypeName: string, skillName: string) {
    return this.http.put<void>(this.urls.skillTypes.saveSkillByName(skillTypeName, skillName), null);
  }
}
