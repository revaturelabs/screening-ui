import { SkillTypeBucketLookUp } from '../entities/SkillTypeBucketLookup';


export const SKILL_TYPE_BUCKET_LOOKUP: SkillTypeBucketLookUp = {
      skillTypeBucketLookupID: 1,
      skillType: {
          skillTypeId: 51,
          title: 'Java EE/Microservices',
          isActive: true
      },
      buckets: [
        { bucketId: 1,
          bucketDescription: 'OCA level Java questions',
          isActive: false,
          questions: null
        },
        { bucketId: 2,
          bucketDescription: 'SQL database questions',
          isActive: true,
          questions: null
        },
        { bucketId: 3,
          bucketDescription: 'JavaScript questions',
          isActive: true,
          questions: null
        },
        { bucketId: 4,
          bucketDescription: 'JavaScript questions',
          isActive: true,
          questions: null
        },
        { bucketId: 5,
          bucketDescription: 'JavaScript questions',
          isActive: true,
          questions: null
        },
        { bucketId: 6,
          bucketDescription: 'JavaScript questions',
          isActive: true,
          questions: null
        },
        { bucketId: 7,
          bucketDescription: 'JavaScript questions',
          isActive: true,
          questions: null
        }
      ],
      weights: [14, 14, 14, 14, 14, 14, 16]
    }

  ;
