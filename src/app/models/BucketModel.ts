import { QuestionModel } from "./QuestionModel";

export class BucketModel {
    bucketid: number;
    bucketName: string;
    weightVaule: number;
    questionAsked: QuestionModel[];
}