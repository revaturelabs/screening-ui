import { Bucket } from '../entities/bucket';
import { SkillTypeBucketLookUp } from '../entities/skillTypeBucketLookup';
import { SkillType } from '../entities/skillType';

export const SKILL_TYPE_BUCKET_LOOKUP: SkillTypeBucketLookUp = {
      skillTypeBucketLookupID: 1,
      skillType: {
          skillTypeID: 51,
          skillTypeName: 'Java EE/Microservices',
          isActive: true
      },
      buckets: [
        { bucketID: 1,
          bucketCategory: 'Basic Java',
          bucketDescription: 'OCA level Java questions',
          isActive: false,
          questions: null
        },
        { bucketID: 2,
          bucketCategory: 'SQL',
          bucketDescription: 'SQL database questions',
          isActive: true,
          questions: null
        },
        { bucketID: 3,
          bucketCategory: 'JavaScript',
          bucketDescription: 'JavaScript questions',
          isActive: true,
          questions: null
        },
        { bucketID: 4,
          bucketCategory: 'HTML',
          bucketDescription: 'JavaScript questions',
          isActive: true,
          questions: null
        },
        { bucketID: 5,
          bucketCategory: 'CSS',
          bucketDescription: 'JavaScript questions',
          isActive: true,
          questions: null
        },
        { bucketID: 6,
          bucketCategory: 'Spring',
          bucketDescription: 'JavaScript questions',
          isActive: true,
          questions: null
        },
        { bucketID: 7,
          bucketCategory: 'Angular',
          bucketDescription: 'JavaScript questions',
          isActive: true,
          questions: null
        }
      ],
      weights: [14, 14, 14, 14, 14, 14, 16]
    }

  ;
