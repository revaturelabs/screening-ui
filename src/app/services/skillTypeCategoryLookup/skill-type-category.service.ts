import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlService } from '../urls/url.service';
import { Weight } from '../../entities/Weight';

/*

*/
const httpOptions = {
  headers: new HttpHeaders({
          'Content-Type':  'application/json',
      })
  };

/**
* Used to move the data for categories and their related weights.
* Overall score for the evaluation is a weighted average of the scores for each category.
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
export class SkillTypeCategoryService {
  constructor(
    private httpClient: HttpClient,
    private urlService: UrlService
  ) { }

  categoriesByWeight: Weight[];


  // getSkillTypeCategories(skillTypeID: number): Observable<any>{
  //   this.httpClient.get<any>(this.ROOT_URL + `skillType/getSkillTypeCategoriesWithWeights/${skillTypeID}`).subscribe(data => {
  //     console.log(data);
  //   })
  //   return of(SKILL_TYPE_CATEGORY_LOOKUP);
  // }

  // Returns an observable array of categories with assigned weights
  getSkillTypeCategories(skillTypeID: number): Observable<any> {
    return this.httpClient.get<any>(`${this.urlService.skillTypes.getCategoryBySkillType(skillTypeID)}`);
  }
  getWeightsBySkillType(skillTypeID: number) {
    return this.httpClient.get<any>(`${this.urlService.weights.getWeightsBySkillType(skillTypeID)}`);
  }

  newSkillTypeForCategory(weight: Weight) {
    return this.httpClient.post<Weight>(`${this.urlService.weights.newWeight()}`, weight, httpOptions);
  }

  getAllWeights() {
    return this.httpClient.get<any>(`${this.urlService.weights.getAll()}`);
  }

  deleteWeight(weightId: number) {
    return this.httpClient.delete<any>(`${this.urlService.weights.deleteWeight(weightId)}`);
  }

/*
  getSkillTypeCategories(skillTypeID: number): Observable<SkillTypeCategoryLookUp>{
    return of(SKILL_TYPE_CATEGORY_LOOKUP);
  }
*/

}
