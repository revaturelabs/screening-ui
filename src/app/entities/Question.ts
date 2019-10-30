import { Bucket } from './Bucket';
import { Category } from './Category';

export class Question {
    questionId: number;
    category: Category;
    isActive: boolean;
    questionText: string;
    sampleAnswer: string;

    constructor(questionId: number, category: Category, isActive: boolean, questionText: string, sampleAnswer:string) {
        this.questionId = questionId;
        this.category = category;
        this.isActive = isActive;
        this.questionText = questionText;
        this.sampleAnswer = sampleAnswer;


    }
}
