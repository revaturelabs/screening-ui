export class ViolationModel {
    violationId: number;
    violationName: string;
    violationDescription: string;
    violationComment: string;

    constructor(violationId: number, violationName: string, violationDescription: string, violationComment: string) {
        this.violationId = violationId;
        this.violationName = violationName;
        this.violationDescription = violationDescription;
        this.violationComment = violationComment;
    }
}