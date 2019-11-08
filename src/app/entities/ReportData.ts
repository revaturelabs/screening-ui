export class Screener {
  name: string;
  email: string;
}
export class BarChartData {
  name: string;
  y: number;
}
export interface ReportData {
  hardestQuestions: string[];
  avgSkillTypeScore: BarChartData[];
  avgBucketTypeScore: BarChartData[];
  violationsByType: BarChartData[];
  numApplicantsPassed: number;
  numApplicantsFailed: number;
  screener: Screener;

  // public ReportData(hardestQuestions, aveSkillTypeScore,
  //     avgBucketTypeScore, numApplicantsPassed, numApplicantsFailed, screenerName, screenerEmail) {
  //         this.hardestQuestions = hardestQuestions;
  //         this.avgSkillTypeScore = aveSkillTypeScore;
  //         this.avgBucketTypeScore = avgBucketTypeScore;
  //         this.numApplicantsPassed = numApplicantsPassed;
  //         this.numApplicantsFailed = numApplicantsFailed;
  //         this.screener = { 'name': screenerName, 'email': screenerEmail };
  // }
}
