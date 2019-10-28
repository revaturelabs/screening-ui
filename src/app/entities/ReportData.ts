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
    avgBucketTypeScore: BarChartData[];
    violationsByType: BarChartData[];
    numApplicantsPassed: number;
    numApplicantsFailed: number;
    screener: Screener;

    
    // public ReportData(hardestQuestions, aveTrackScore, 
    //     avgBucketTypeScore, numApplicantsPassed, numApplicantsFailed, screenerName, screenerEmail) {
    //         this.hardestQuestions = hardestQuestions;
    //         this.avgTrackScore = aveTrackScore;
    //         this.avgBucketTypeScore = avgBucketTypeScore;
    //         this.numApplicantsPassed = numApplicantsPassed;
    //         this.numApplicantsFailed = numApplicantsFailed;
    //         this.screener = { 'name': screenerName, 'email': screenerEmail };
    // }
}