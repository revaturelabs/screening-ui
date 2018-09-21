import { Pipe, PipeTransform } from '@angular/core';

import { Bucket } from '../entities/Bucket';

@Pipe({
    name: 'bucketFilter',
    pure: false
})

/*
BucketFilterPipe filters Buckets based on Bucket.bucketCategory (name)
Used in skillTypes-bucket
*/
export class BucketFilterPipe implements PipeTransform {
    transform(items: Bucket[], filter: Bucket): Bucket[] {
        if (!items || !filter) {
            return items;
        }
        return items.filter((item: Bucket) => this.applyFilter(item, filter));
    }

/*
applies filter based on bucketName field.
 */
    applyFilter(bucket: Bucket, filter: Bucket): boolean {
        for (const field in filter) {
            if (filter[field]) {
                if (typeof filter[field] === 'string') {
                    if (bucket.bucketCategory.toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
                        return false;
                    }
                } else if (typeof filter[field] === 'number') {
                    if (bucket[field] !== filter[field]) {
                        return false;
                    }
                }
            }
        }
        return true;

    }
}
