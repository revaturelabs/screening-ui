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
  avgTrackScore: BarChartData[];
  avgCategoryTypeScore: BarChartData[];
  violationsByType: BarChartData[];
  numApplicantsPassed: number;
  numApplicantsFailed: number;
  screener: Screener;

  // public ReportData(hardestQuestions, aveTrackScore,
  //     avgCategoryTypeScore, numApplicantsPassed, numApplicantsFailed, screenerName, screenerEmail) {
  //         this.hardestQuestions = hardestQuestions;
  //         this.avgTrackScore = avgTrackScore;
  //         this.avgCategoryTypeScore = avgCategoryTypeScore;
  //         this.numApplicantsPassed = numApplicantsPassed;
  //         this.numApplicantsFailed = numApplicantsFailed;
  //         this.screener = { 'name': screenerName, 'email': screenerEmail };
  // }
}
