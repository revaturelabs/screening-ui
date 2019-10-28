import { ScheduledScreening } from "./ScheduledScreening";

export class Screening{
    screeningId: number;
    scheduledScreening: ScheduledScreening;
    screenerId: number;
    skillType: number;
    compositeScore: number;
    aboutMeCommentary: string;
    generalCommentary: string;
    softSkillCommentary: string;
    startDateTime: Date;
    endDateTime: Date;
    softSkillsVerdict: boolean;
    status: String;
}