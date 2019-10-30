export class Candidate {
    candidateId: number;
    resourceId: number;
    name: string;
    email: string;
    phoneNumber: string;
    skypeId: string;
    profileUrl: string;
    recruiterName: string;
    college: string;
    degree: string;
    major: string;
    techScreenerName: string;

    constructor(candidateId: number, resourceId: number, name: string, email: string, phoneNumber: string, skypeId: string, profileUrl: string,
        recruiterName: string, college: string, degree: string, major: string, techScreenerName: string) {
        this.candidateId = candidateId;
        this.resourceId = resourceId;
        this.name = name;
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
