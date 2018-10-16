import { QuestionScore } from '../entities/QuestionScore';
import { SkillTypeBucketLookUp } from '../entities/SkillTypeBucketLookup';
import { QuestionsService} from '../services/questions/questions.service';
import { Weight } from '../entities/Weight';
export class ScoresToBucketsUtil {

    private questionsService:QuestionsService;
    getFinalBreakdown(questionScores: QuestionScore[], weights:Weight[]): string[] {
        let bucketScores = {}; // maps bucket id's to total bucket score for screenee
        let bucketWeights = {}; // maps bucket id's to weight values for bucket
        let qCount = {};
        let score = 0;
        let parts=[];
        let tempScore;
        weights.forEach(w =>
          {
            bucketWeights[w.bucket.bucketId] = w;
          }
        );
        questionScores.forEach(qs =>
          {
            if(!bucketScores[qs.bucketId])
               bucketScores[qs.bucketId] = 0;
             if(qs.score>0){
               if(!bucketScores[qs.bucketId])
                 qCount[qs.bucketId] = 0;
               qCount[qs.bucketId]++;
             }

             bucketScores[qs.bucketId] += qs.score;
         }
       );
       for(var key in bucketScores){
         score += (bucketScores[key]/qCount[key])*bucketWeights[key].weightValue;
         tempScore = (((bucketScores[key]/qCount[key])*20) - 20) *1.25;
         parts.push(bucketWeights[key].bucket.bucketDescription +": " + tempScore.toFixed(0) +"% " );
       }
       if(score>0){
        score /=5;
        score -= 20;
        score *= 1.25;
       }
       return ["Overall: " + score.toFixed(0) + "%"].concat(parts);
    }
}
