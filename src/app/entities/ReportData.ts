class Screener {
    name: string;
    email: string;
}
export class ReportData {
    'hardest-questions': string[];
    'avg-skill-type-score': Object[];
    'avg-bucket-type-score': Object[];
    'num-applicants-passed': number;
    'num-applicants-failed': number;
    'screener': Screener;
    public ReportData(hardestQuestions, aveSkillTypeScore, 
        aveBucketTypeScore, numApplicantsPassed, numApplicantsFailed, screenerName, screenerEmail) {
            this["hardest-questions"] = hardestQuestions;
            this["avg-skill-type-score"] = aveSkillTypeScore;
            this["avg-bucket-type-score"] = aveBucketTypeScore;
            this["num-applicants-passed"] = numApplicantsPassed;
            this["num-applicants-failed"] = numApplicantsFailed;
            this.screener = { 'name': screenerName, 'email': screenerEmail };
        }
}