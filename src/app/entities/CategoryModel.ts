import { QuestionModel } from './QuestionModel';

export class CategoryModel {
    categoryId: number;
    categoryDescription: string;
    weightValue: number;
    averageQuestionScore: number;
    question: QuestionModel[];

    constructor(categoryId: number, categoryDescription: string, weightValue: number, averageQuestionScore: number, question: QuestionModel[]) {
        this.categoryId = categoryId;
        this.categoryDescription = categoryDescription;
        this.weightValue = weightValue;
        this.averageQuestionScore = averageQuestionScore;
        this.question = question;


    }

}