
/*
    Entity representing the candidate being screened
*/
export interface SimpleTrainee {
    traineeID: number;
    firstname: string;
    lastname: string;
    skillTypeID: number;
    skillTypeName: string;
    schedule: Date;
}
