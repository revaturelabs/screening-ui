import { Category } from './Category';
import { SkillType } from './SkillType';

/*
    Entity representing the Category matched to a given technical track (skillType)
*/
export interface SkillTypeCategoryLookUp {
    skillType: SkillType;
    categories: Category[];
    weights: number[];
}
