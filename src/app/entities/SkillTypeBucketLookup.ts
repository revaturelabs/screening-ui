import { Bucket } from './Bucket';
import { SkillType } from './SkillType';

/*
    Entity representing the buckets (skills) matched to a given technical track (skillType)
*/
export interface SkillTypeBucketLookUp {
    skillType: SkillType;
    buckets: Bucket;
    weights: number;
}
