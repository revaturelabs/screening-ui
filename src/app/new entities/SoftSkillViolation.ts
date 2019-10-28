import { Screening } from "./Screening";
import { ViolationType } from "./ViolationType";

export class SoftSkillViolation {
    softViolationId: number;
    screening: Screening;
    violationType: ViolationType;
    comment: string;
    time: Date;
}