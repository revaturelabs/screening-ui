import { SimpleReportModel } from "./SimpleReportModel";
import { Candidate } from "./Candidate";
import { ViolationModel } from "./ViolationModel";
import { CategoryModel } from "./CategoryModel";

export class FullReportModel {
  srm: SimpleReportModel;
  screener_id: number;
  candidate: Candidate;
  aboutMeCommentary: string;
  generalCommentary: string;
  softSkillCommentary: string;
  softSkillVerdict: boolean;
  categoriesTested: CategoryModel[];
  violationsObserved: ViolationModel[];

  constructor(
    srm: SimpleReportModel,
    screener_id: number,
    candidate: Candidate,
    aboutMeCommentary: string,
    generalCommentary: string,
    softSkillCommentary: string,
    softSkillVerdict: boolean,
    categoriesTested: CategoryModel[],
    violationsObserved: ViolationModel[]
  ) {
    this.srm = srm;
    this.screener_id = screener_id;
    this.candidate = candidate;
    this.aboutMeCommentary = aboutMeCommentary;
    this.generalCommentary = generalCommentary;
    this.softSkillCommentary = softSkillCommentary;
    this.softSkillVerdict = softSkillVerdict;
    this.categoriesTested = categoriesTested;
    this.violationsObserved = violationsObserved;
  }
}
