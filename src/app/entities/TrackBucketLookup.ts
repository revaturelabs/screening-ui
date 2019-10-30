import { Bucket } from './Bucket';
import { Track } from './Track';

/*
    Entity representing the categories (buckets) matched to a given technical track (track)
*/
export interface TrackBucketLookUp {
    track: Track;
    buckets: Bucket[];
    weights: number[];
}
