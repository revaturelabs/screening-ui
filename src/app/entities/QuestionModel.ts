export class QuestionModel {
    questionId: number;
    questionText: string;
    questionAnswer: string;
    score: number;
    questionComment: string;

    constructor(questionId: number, questionText: string, questionAnswer: string, score: number, questionComment: string) {
        this.questionId = questionId;
        this.questionText = questionText;
        this.questionAnswer = questionAnswer;
        this.score = score;
        this.questionComment = questionComment;
    }
}