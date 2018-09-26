import { Question } from './Question';

export class Bucket {
    bucketId: number;
    bucketDescription: string;
    isActive = true;
    questions: Question[];
}
