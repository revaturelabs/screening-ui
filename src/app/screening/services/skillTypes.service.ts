import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

import { SkillType } from '../entities/SkillType';
import { SkillTypeBucket } from '../entities/SkillTypeBucket';
import { Bucket } from '../entities/Bucket';
import { UrlService } from '../../../../../gambit-client/services/urls/url.service';


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
        return this.http.post(this.urlService.skillTypes.setSkillTypeBuckets(), { skillTypeName: skillType.skillTypeName, skillTypeId:
            skillType.skillTypeId, bucketIds: bucketIds, weights: weights }, httpOptions);
    }

    updateSkillTypeBuckets(skillType: SkillType, bucketIds, weights) {
        return this.http.put(this.urlService.skillTypes.updateSkillTypeBuckets(), { skillTypeName: skillType.skillTypeName,
            skillTypeId: skillType.skillTypeId, bucketIds: bucketIds, weights: weights }, httpOptions);
    }

    getSkillTypeById(skillTypeId: number) {
        return this.http.get(this.urlService.skillTypes.getSkillTypeById(skillTypeId));
    }

    /** Temporary solution for this func, need to double check with back-end **/
    getBucketsBySkillType(skillTypeId: number) {
        return this.http.get<Bucket[]>(this.urlService.skillTypes.getBucketBySkillType(skillTypeId));
    }
}
