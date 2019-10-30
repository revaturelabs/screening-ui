import { Bucket } from './Bucket';
import { SkillType } from './SkillType';
import { Track } from './Track';
import { Category } from './Category';

export class Weight {
    weightId: number;
    weightValue: number;
    track: Track;
    category: Category;
}
