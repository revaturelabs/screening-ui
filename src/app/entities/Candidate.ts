
import { User } from './User';
import { UserRole } from './UserRole';


export class Candidate extends User {
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


    constructor(userId?: number, firstName?: string, middleName?: string, lastName?: string,
        email?: string, password?: string, backupPassword?: string, role?: UserRole,
        mobilePhone?: string, homePhone?: string, token?: string,
        candidateId?: number, resourceId?: number,
        phoneNumber?: string, skypeId?: string, profileUrl?: string, recruiterName?: string,
        college?: string, degree?: string, major?: string, techScreenerName?: string) {
            super(userId, firstName, middleName, lastName, email, password,
                backupPassword, role, mobilePhone, homePhone, token);
            this.candidateId = candidateId;
            this.resourceId = resourceId;
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
