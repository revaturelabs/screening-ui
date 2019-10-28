import { Category } from './Category';

export class Question {
    questionId: number;
    questionText: string;
    sampleAnswer: string;
    isActive: boolean;
    category: Category;
}
