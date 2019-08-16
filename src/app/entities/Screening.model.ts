
export class Screening{
    screeningId: number;
    name: string;
    scheduledStatus:string;
    skillTypeId: number;
    scheduledDate:string;
    map: any;


    constructor( screeningId: number, name: string, scheduledStatus: string, skillTypeId: number, scheduledDate: string){
            this.screeningId = screeningId;
            this.name = name;
        this.scheduledStatus = scheduledStatus;
        this.skillTypeId = skillTypeId;
        this.scheduledDate = scheduledDate;
        }
}


export class ScheduleScreening{
    scheduledScreeningId: number;
    candidate: Candidate;
    scheduledStatus:string;
    skillTypeId: number;
    scheduledDate:string;

    
    constructor( scheduledScreeningId: number, candidate: any, scheduledStatus: string, skillTypeId: number, scheduledDate: string){
        this.scheduledScreeningId = scheduledScreeningId;
        this.candidate = candidate;
        this.scheduledStatus = scheduledStatus;
        this.skillTypeId = skillTypeId;
        this.scheduledDate = scheduledDate;

    }

}

export class Candidate{
    candidateId: number;
    resourceId: number;
    name: string;
    email: string;
    phoneNumber: number;
    skypeId: number;
    profileUrl: string;
    recruiterName: string;
    college: string;
    degree: string;
    major: string;
    techScreenerName: string;

    constructor( candidateId: number, resourceId: number, name: string, email: string, phoneNumber: number, skypeId: number, profileUrl: string, 
        recruiterName: string, college: string, degree: string, major: string, techScreenerName: string){
        this.candidateId= candidateId;
        this.resourceId = resourceId;
        this.name =  name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.skypeId = skypeId;
        this.profileUrl = profileUrl;
        this.recruiterName = recruiterName;
        this.college = college;
        this.degree = degree;
        this.major = major;
        this.techScreenerName = techScreenerName;
    }
}
                
