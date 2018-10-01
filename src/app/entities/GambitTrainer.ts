import { User } from './User';
import { UserRole } from './UserRole';

export class GambitTrainer extends User {
   title: string;

   constructor(userId?: number, firstName?: string, middleName?: string, lastName?: string,
    email?: string, password?: string, backupPassword?: string, role?: UserRole,
    mobilePhone?: string, homePhone?: string, token?: string, title?: string) {
        super(userId, firstName, middleName, lastName, email, password,
            backupPassword, role, mobilePhone, homePhone, token);
        this.title = title;
    }
}
