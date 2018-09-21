import { Bucket } from '../entities/bucket';
import { Question } from '../entities/question';
import { SkillTypeBucketLookUp } from '../entities/skillTypeBucketLookup';

export class QuestionsToBucketsUtil {

  private returnBuckets: Bucket[] = [];

  saveQuestions(allQuestions: Question[], allBuckets: SkillTypeBucketLookUp): Bucket[] {
    allQuestions.forEach(question => {
      // If the buckets array is empty, add this question's bucket to it
      if (this.returnBuckets.length === 0) {
        const matchingBucket = allBuckets.buckets.find(function(element) {
          return element.bucketID === question.bucketId;
        });
        // After adding the new bucket, add the current question to the new bucket
        if (matchingBucket) {
          this.returnBuckets.push(matchingBucket);
          this.returnBuckets[this.returnBuckets.length - 1].questions = [];
          this.returnBuckets[this.returnBuckets.length - 1].questions.push(question);
        }
      // If the bucket array is not empty, check to see if this question's bucket is already listed
      } else {
        const existingBucket = this.returnBuckets.find(function(element) {
          return element.bucketID === question.bucketId;
        });
        // If this question's bucket is not listed, add it
        if (!existingBucket) {
          const matchingBucket = allBuckets.buckets.find(function(element) {
            return element.bucketID === question.bucketId;
          });
          // After adding the new bucket, add the current question to the new bucket
          if (matchingBucket) {
            this.returnBuckets.push(matchingBucket);
            this.returnBuckets[this.returnBuckets.length - 1].questions = [];
            this.returnBuckets[this.returnBuckets.length - 1].questions.push(question);
          }
        // If the bucket exists, add question to it
        } else {
          this.returnBuckets[this.returnBuckets.indexOf(existingBucket)].questions.push(question);
        }
      }

    });
    return this.returnBuckets;
  }

}
