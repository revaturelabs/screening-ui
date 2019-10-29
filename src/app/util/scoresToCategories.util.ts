import { QuestionScore } from '../entities/QuestionScore';
import { QuestionsService } from '../services/questions/questions.service';
import { Weight } from '../entities/Weight';
export class ScoresToCategoriesUtil {

  private questionsService: QuestionsService;

  getFinalBreakdown(questionScores: QuestionScore[], weights: Weight[]): string[] {
    const categoryScores: number[] = [];
    const categoryWeights: number[] = [];
    let score = 0;
    weights.forEach(w => {
      categoryWeights[w.category.categoryId] = w.weightValue;
    });
    questionScores.forEach(qs => {
      categoryScores[qs.categoryId] += qs.score;
    });
    for (const key of categoryScores) {
      score += categoryScores[key] * categoryWeights[key];
    }
    return ['Overall: ' + score];
  }
}
