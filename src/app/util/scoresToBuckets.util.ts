import { QuestionScore } from "../entities/QuestionScore";
import { QuestionsService } from "../services/questions/questions.service";
import { Weight } from "../entities/Weight";
export class ScoresToBucketsUtil {
  private questionsService: QuestionsService;

  getFinalBreakdown(
    questionScores: QuestionScore[],
    weights: Weight[]
  ): string[] {
    const bucketScores: number[] = [];
    const bucketWeights: number[] = [];
    let score = 0;
    weights.forEach(w => {
      bucketWeights[w.bucket.bucketId] = w.weightValue;
    });
    questionScores.forEach(qs => {
      bucketScores[qs.bucketId] += qs.score;
    });
    for (const key of bucketScores) {
      score += bucketScores[key] * bucketWeights[key];
    }
    return ["Overall: " + score];
  }
}
