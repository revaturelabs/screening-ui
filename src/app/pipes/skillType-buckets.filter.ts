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

    transform(buckets: Bucket[], searchText=""): Bucket[] {
        if(!buckets) {
            return [];
        }
        if(searchText) {
            searchText=searchText.toLowerCase();
        } else {
            return buckets;
        }
        return buckets.filter(buckets=> {
            let search: boolean;
            let name = buckets.bucketDescription;
            search = name.toLowerCase().includes(searchText);
            return search;
        })
    }
 }
