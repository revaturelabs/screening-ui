import {ViolationType} from './ViolationType';
import { Screening } from './Screening';

/*
    Entity representing an occurrence of a soft skill violation during a screening
*/
export class SoftSkillViolation {
    softSkillViolationID: number;
    screening: Screening;
    violationType: ViolationType;
    Comment: string;
    Time: Date;
    
}
