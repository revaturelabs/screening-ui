import { Category } from './Category';
import { Track } from './Track';

/*
    Entity representing the categories matched to a given technical track (track)
*/
export interface TrackBucketLookUp {
    track: Track;
    categories: Category[];
    weights: number[];
}
