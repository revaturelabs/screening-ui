import { Track } from './Track';

export class SimpleReportModel {
    screeningId: number;
    screenDate: Date;
    compositeScore: number;
    track: Track;

    constructor(screeningId: number, screenDate: Date, compositeScore: number, track: Track) {
        this.screeningId = screeningId;
        this.screenDate = screenDate;
        this.compositeScore = compositeScore;
        this.track = track;
    }
}