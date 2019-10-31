import { SimpleReportModel } from './SimpleReportModel';
import { Candidate } from "./Candidate";
import { ViolationModel } from "./ViolationModel";
import { CategoryModel } from './CategoryModel';

export class FullReportModel {
    srm: SimpleReportModel;
    screener_id: number;
    can: Candidate;
    aboutMeCommentary: string;
    generalCommentary: string;
    softSkillCommentary: string;
    softSkillVerdict: boolean;
    CategoryTested: CategoryModel[];
    violation: ViolationModel[];

    constructor(srm: SimpleReportModel, screener_id: number, can: Candidate, aboutMeCommentary: string, generalCommentary: string,
        softSkillCommentary: string, softSkillVerdict: boolean, CategoryTestted: CategoryModel[], violation: ViolationModel[]) {
        this.srm = srm;
        this.screener_id = screener_id;
        this.can = can;
        this.aboutMeCommentary = aboutMeCommentary;
        this.generalCommentary = generalCommentary;
        this.softSkillCommentary = softSkillCommentary;
        this.softSkillVerdict = softSkillVerdict;
        this.CategoryTested = CategoryTestted;
        this.violation = violation;



    }
}