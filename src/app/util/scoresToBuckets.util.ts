import { QuestionScore } from '../entities/QuestionScore';
import { SkillTypeBucketLookUp } from '../entities/SkillTypeBucketLookup';
import { QuestionsService} from '../services/questions/questions.service';
import { Weight } from '../entities/Weight';
export class ScoresToBucketsUtil {

    private questionsService:QuestionsService;
    getFinalBreakdown(questionScores: QuestionScore[], weights:Weight[]): string[] {
        let bucketScores = {}; // maps bucket id's to total bucket score for screenee
        let bucketWeights = {}; // maps bucket id's to weight values for bucket
        let score = 0;
        weights.forEach(w =>
          {
            bucketWeights[w.bucket.bucketId] = w.weightValue;
          }
        );
        questionScores.forEach(qs =>
          {
              bucketScores[qs.bucketId] += qs.score;
          }
        );
        for(var key in bucketScores){
          score += bucketScores[key]*bucketWeights[key];
        }
        
        return ["Overall: " + score];
    }
}
