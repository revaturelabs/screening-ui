import { UserRole } from './UserRole';

export class User {
    userId: number;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    password: string;
    backupPassword: string;
    role: UserRole;
    mobilePhone: string;
    homePhone: string;
    token: string;

    constructor(userId: number, firstName: string, middleName: string, lastName: string,
        email: string, password: string, backupPassword: string, role: UserRole,
        mobilePhone: string, homePhone: string, token: string) {
            this.userId = userId;
            this.firstName = firstName;
            this.middleName = middleName;
            this.lastName = lastName;
            this.email = email;
            this.password = password;
            this.backupPassword = backupPassword;
            this.role = role;
            this.mobilePhone = mobilePhone;
            this.homePhone = homePhone;
            this.token = token;
    }

}
