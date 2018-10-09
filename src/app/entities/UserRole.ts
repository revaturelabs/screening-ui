export class UserRole {
    roleId: number;
    role: string;

    constructor(roleId?: number, role?: string) {
        this.roleId = roleId;
        this.role = role;
    }
}
