import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Track } from '../../entities/Track';
import { Bucket } from '../../entities/Bucket';
import { UrlService } from '../urls/url.service';


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })
};

@Injectable()
export class TracksService {

    constructor(
        private http: HttpClient,
        private urlService: UrlService
    ) { }
    public trackBuckets: Observable<Track[]>;

    createTrack(track: Track) {
        return this.http.post<Track>(this.urlService.tracks.createTrack(), track, httpOptions);
    }

    activateTrack(track: Track) {
        return this.http.put(this.urlService.tracks.putTrack(track.trackId), track, httpOptions);
    }

    deactivateTrack(track: Track) {
        return this.http.put(this.urlService.tracks.putTrack(track.trackId), track, httpOptions);
    }

    updateTrack(track: Track) {
        return this.http.put(this.urlService.tracks.putTrack(track.trackId), track, httpOptions);
    }

    getTracks() {
        return this.http.get<any[]>(this.urlService.tracks.getTracks());
    }

    setTrackBuckets(track: Track, bucketIds, weights) {
        return this.http.post(this.urlService.tracks.setTrackBuckets(), { title: track.title, trackId:
            track.trackId, bucketIds: bucketIds, weights: weights }, httpOptions);
    }

    updateTrackBuckets(track: Track, bucketIds, weights) {
        return this.http.put(this.urlService.tracks.updateTrackBuckets(track.trackId), { title: track.title,
            trackId: track.trackId, bucketIds: bucketIds, weights: weights }, httpOptions);
    }

    getTrackById(trackId: number) {
        return this.http.get(this.urlService.tracks.getTrackById(trackId));
    }

    /** Temporary solution for this func, need to double check with back-end **/
    getBucketsByTrack(trackId: number) {
        return this.http.get<Bucket[]>(this.urlService.tracks.getBucketByTrack(trackId));
    }
}
