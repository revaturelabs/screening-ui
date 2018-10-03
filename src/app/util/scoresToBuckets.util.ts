import { QuestionScore } from '../entities/QuestionScore';
import { SkillTypeBucketLookUp } from '../entities/SkillTypeBucketLookup';
import { QuestionsService} from '../services/questions/questions.service';

export class ScoresToBucketsUtil {

    private questionsService:QuestionsService;
    getFinalBreakdown(questionScores: QuestionScore[], bucketsByWeight:SkillTypeBucketLookUp): string[] {
        const bucketNames: string[] = [];
        const totals: number[] = [];
        const scores: number[] = [];
        let bucketIndex = 0;
        let questionsAsked;
        let totalWeights = 0;
        let totalBuckets = 0;
        
        let normalizeWeight = 0;
        // If the total weights from the buckets with answered questions don't add up to 100%, evenly distribute the difference
        if (totalWeights < 100) {
            normalizeWeight = (100 - totalWeights) / totalBuckets;
        }
        const breakdowns: string[] = [];
        let breakdownIndex = 0;
        let weightedTotal = 0;
        // Loop through all buckets
        bucketNames.forEach(thisSummary => {
            // If at least one question from this bucket was asked, calculate the total weighted score for the bucket
            if (bucketNames[breakdownIndex] !== 'skip') {
                // augments the points per question by normalized weight
                const weightedbucket = (bucketsByWeight.weights[breakdownIndex] + normalizeWeight);
                const weightedscore = scores[breakdownIndex] / totals[breakdownIndex] * weightedbucket;


                // build array of strings to return for copying and pasting into salesforce
                breakdowns.push(Number(weightedscore).toFixed(0) + '/' + Number(weightedbucket).toFixed(0) +
                    ' ' + bucketNames[breakdownIndex]);
                weightedTotal += (scores[breakdownIndex] / totals[breakdownIndex]) *
                    (bucketsByWeight.weights[breakdownIndex] + normalizeWeight);
            }
            breakdownIndex++;
        });
        // add the overall score line as a string to the end of the array
        breakdowns.push('Overall: ' + Number(weightedTotal).toFixed(1) + '%');
        // add just the raw overall score for saving to the database to the end of the array
        breakdowns.push(weightedTotal.toString());
        return breakdowns;
    }
}
