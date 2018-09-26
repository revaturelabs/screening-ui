import { Question } from "./question";

export class Bucket {
    bucketId: number;
    bucketDescription: string;
    isActive = true;
    questions: Question[];
}
