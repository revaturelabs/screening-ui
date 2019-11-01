import { Screening } from "./Screening";

export class Screener {
    screenerId: number;
    name: string;
    email: string;
    screenings: Screening[]; //

    constructor(screenerId: number, name: string, email: string, screenings: Screening[]) {
        this.screenerId = screenerId;
        this.name = name;
        this.email = email;
        this.screenings = screenings;
    }

}