import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { SkillType } from '../../entities/SkillType';
import { Category } from '../../entities/Category';
import { UrlService } from '../urls/url.service';


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })
};

@Injectable()
export class SkillTypesService {

    constructor(
        private http: HttpClient,
        private urlService: UrlService
    ) { }
    public skillTypeCategories: Observable<SkillType[]>;

    createSkillType(skillType: SkillType) {
        return this.http.post<SkillType>(this.urlService.skillTypes.createSkillType(), skillType, httpOptions);
    }

    activateSkillType(skillType: SkillType) {
        return this.http.put(this.urlService.skillTypes.putSkillType(skillType.skillTypeId), skillType, httpOptions);
    }

    deactivateSkillType(skillType: SkillType) {
        return this.http.put(this.urlService.skillTypes.putSkillType(skillType.skillTypeId), skillType, httpOptions);
    }

    updateSkillType(skillType: SkillType) {
        return this.http.put(this.urlService.skillTypes.putSkillType(skillType.skillTypeId), skillType, httpOptions);
    }

    getSkillTypes() {
        return this.http.get<any[]>(this.urlService.skillTypes.getSkillTypes());
    }

    setSkillTypeCategories(skillType: SkillType, categoryIds, weights) {
        return this.http.post(this.urlService.skillTypes.setSkillTypeCategories(), { title: skillType.title, skillTypeId:
            skillType.skillTypeId, categoryIds: categoryIds, weights: weights }, httpOptions);
    }

    updateSkillTypeCategories(skillType: SkillType, categoryIds, weights) {
        return this.http.put(this.urlService.skillTypes.updateSkillTypeCategories(skillType.skillTypeId), { title: skillType.title,
            skillTypeId: skillType.skillTypeId, categoryIds: categoryIds, weights: weights }, httpOptions);
    }

    getSkillTypeById(skillTypeId: number) {
        return this.http.get(this.urlService.skillTypes.getSkillTypeById(skillTypeId));
    }

    /** Temporary solution for this func, need to double check with back-end **/
    getCategoriesBySkillType(skillTypeId: number) {
        return this.http.get<Category[]>(this.urlService.skillTypes.getCategoryBySkillType(skillTypeId));
    }
}
