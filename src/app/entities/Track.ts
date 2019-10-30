export class Track {
    trackId: number;
    title: string;
    isActive: boolean;

    constructor(trackId: number, title: string, isActive: boolean) {
        this.trackId = trackId;
        this.title = title;
        this.isActive = isActive;


    }
}