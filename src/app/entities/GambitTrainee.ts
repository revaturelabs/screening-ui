
import { User } from './User';
import { UserRole } from './UserRole';


export class GambitTrainee extends User {
    traineeId: number;
    resourceId: number;
    trainingStatus: string;
    phoneNumber: string;
    skypeId: string;
    profileUrl: string;
    recruiterName: string;
    college: string;
    degree: string;
    major: string;
    techScreenerName: string;
    projectCompletion: string;
    flagStatus: string;
    flagNotes: string;
    marketingStatus: string;
    client: string;
    endClient: string;
    traineeUserInfo: User;

    constructor(userId?: number, firstName?: string, middleName?: string, lastName?: string,
        email?: string, password?: string, backupPassword?: string, role?: UserRole,
        mobilePhone?: string, homePhone?: string, token?: string,
        traineeId?: number, resourceId?: number, trainingStatus?: string,
        phoneNumber?: string, skypeId?: string, profileUrl?: string, recruiterName?: string,
        college?: string, degree?: string, major?: string, techScreenerName?: string,
        projectCompletion?: string, flagStatus?: string, flagNotes?: string, marketingStatus?: string,
        client?: string, endClient?: string, traineeUserInfo?: User) {
            super(userId, firstName, middleName, lastName, email, password,
                backupPassword, role, mobilePhone, homePhone, token);
            this.traineeId = traineeId;
            this.resourceId = resourceId;
            this.trainingStatus = trainingStatus;
            this.phoneNumber = phoneNumber;
            this.skypeId = skypeId;
            this.profileUrl = profileUrl;
            this.recruiterName = recruiterName;
            this.college = college;
            this.degree = degree;
            this.major = major;
            this.techScreenerName = techScreenerName;
            this.projectCompletion = projectCompletion;
            this.flagStatus = flagStatus;
            this.flagNotes = flagNotes;
            this.marketingStatus = marketingStatus;
            this.client = client;
            this.endClient = endClient;
            this.traineeUserInfo = traineeUserInfo;
      }
}


