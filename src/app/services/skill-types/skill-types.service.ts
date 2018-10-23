import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { SkillType } from '../../entities/SkillType';
import { Bucket } from '../../entities/Bucket';
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
    public skillTypeBuckets: Observable<SkillType[]>;

    createSkillType(skillType: SkillType) {
        return this.http.post(this.urlService.skillTypes.createSkillType(), skillType, httpOptions);
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

    setSkillTypeBuckets(skillType: SkillType, bucketIds, weights) {
        return this.http.post(this.urlService.skillTypes.setSkillTypeBuckets(), { title: skillType.title, skillTypeId:
            skillType.skillTypeId, bucketIds: bucketIds, weights: weights }, httpOptions);
    }

    updateSkillTypeBuckets(skillType: SkillType, bucketIds) {
        return this.http.put(this.urlService.skillTypes.updateSkillTypeBuckets(skillType.skillTypeId), { title: skillType.title,
            skillTypeId: skillType.skillTypeId, bucketIds: bucketIds }, httpOptions);
    }

    getSkillTypeById(skillTypeId: number) {
        return this.http.get(this.urlService.skillTypes.getSkillTypeById(skillTypeId));
    }

    /** Temporary solution for this func, need to double check with back-end **/
    getBucketsBySkillType(skillTypeId: number) {
        return this.http.get<Bucket[]>(this.urlService.skillTypes.getBucketBySkillType(skillTypeId));
    }
    deleteSkillTypeById(skillTypeId: number){
        return this.http.delete<any>(`${this.urlService.skillTypes.delete(skillTypeId)}`);
    }
}
