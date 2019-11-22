import { Category } from './Category';

export class Question {
  questionId: number;
  category: Category;
  isActive: boolean;
  questionText: string;
  sampleAnswer: string;
}
