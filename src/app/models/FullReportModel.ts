import { Candidate } from "../new entities/Candidate";
import { BucketModel } from "./BucketModel";
import { ViolationModel } from "./ViolationModel";

export class FullReportModel {
    internal_id: number;
    scheduleDate: Date;
    screener_id: number;
    can: Candidate;
    aboutMeCommentary: string;
    generalCommentary: string;
    softSkillCommentary: string;
    softSkillVerdict: boolean;
    skillType: string;
    BucketTested: BucketModel[];
    violation: ViolationModel[];
}