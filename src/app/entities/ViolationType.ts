/*
    Entity representing the type of a SoftSkillViolation
*/
export interface ViolationType {
  violationTypeId: number;
  violationType: string;
}

//new
export class ViolationType {
  violationTypeId: number;
  violationTypeText: string;
  description: string;
}
