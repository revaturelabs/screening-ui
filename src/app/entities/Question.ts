import { Bucket } from './Bucket';

export class Question {
  questionId: number;
  questionText: string;
  sampleAnswer: string;
  isActive: boolean;
  bucket: Bucket;
}
