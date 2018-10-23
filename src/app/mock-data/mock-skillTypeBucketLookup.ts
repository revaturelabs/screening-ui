import { SkillTypeBucketLookUp } from '../entities/SkillTypeBucketLookup';


export const SKILL_TYPE_BUCKET_LOOKUP: SkillTypeBucketLookUp = {
      // skillTypeBucketLookupID: 1,
      skillType: {
          skillTypeId: 51,
          title: 'Java EE/Microservices',
          active: true
      },
      buckets: [
        { bucketId: 1,
          bucketDescription: 'OCA level Java questions',
          isActive: false,
        },
        { bucketId: 2,
          bucketDescription: 'SQL database questions',
          isActive: true,
        },
        { bucketId: 3,
          bucketDescription: 'JavaScript questions',
          isActive: true,
        },
        { bucketId: 4,
          bucketDescription: 'JavaScript questions',
          isActive: true,
        },
        { bucketId: 5,
          bucketDescription: 'JavaScript questions',
          isActive: true,
        },
        { bucketId: 6,
          bucketDescription: 'JavaScript questions',
          isActive: true,
        },
        { bucketId: 7,
          bucketDescription: 'JavaScript questions',
          isActive: true,
        }
      ],
      weights: [14, 14, 14, 14, 14, 14, 16]
    }

  ;
