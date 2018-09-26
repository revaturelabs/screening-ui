import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { SkillType } from '../../entities/skillType';
import { SKILLTYPES } from '../../mock-data/mock-skillTypes';
import { UrlService } from '../../../../../gambit-client/services/urls/url.service';


/**
* Used to get the mock data to create mock candidates.
* Code exists in repository, but is being refactored in the Skill Type Bucket Service
*
* Modified from made endpoints more consistent with
* the rest of the application.
*
* @author Alex Pich | 1803-USF-MAR26 | Wezley Singleton
*
* @author Danny S Chhun | 1803-USF-MAR26 | Wezley Singleton
*
* @author Michael Adedigba | 1803-USF-MAR26 | Wezley Singleton
*
* @author Pedro De Los Reyes | 1803-USF-MAR26 | Wezley Singleton
*/
@Injectable()
export class SkillTypeService {
  private candidateSkillType: Observable<SkillType>;
  constructor(
    private httpClient: HttpClient,
    private urlService: UrlService
  ) { }

  /*
  getSkillTypes(): Observable<SkillType[]> {
    return of(SKILLTYPES);
  }
  */

  /** Returns an observable array of all skill types */
  getSkillTypes(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.urlService.skillTypes.getSkillTypes());
  }

  // getSkillTypes(): Observable<SkillType[]> {
  //   return this.httpClient.get<SkillType[]>(this.ROOT_URL + "/all.json");
  // }
}
