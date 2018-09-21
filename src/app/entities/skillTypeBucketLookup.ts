import { Bucket } from './bucket';
import { SkillType } from './skillType';

/*
    Entity representing the buckets (skills) matched to a given technical track (skillType)
*/
export interface SkillTypeBucketLookUp {
    skillTypeBucketLookupID: number;
    skillType: SkillType;
    buckets: Bucket[];
    weights: number[];
}
