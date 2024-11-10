import { ApiProperty } from "@nestjs/swagger";

export enum Role {
    User = 'user', // пользователь
    Admin = 'admin', // админ
}

export class User {

    constructor(id: number, login: string, password_hash: string, role: Role) {
        this.id = id,
        this.login = login,
        this.password_hash = password_hash,
        this.role = role;
    }

    @ApiProperty()
    id: number;

    @ApiProperty()
    login: string;

    @ApiProperty()
    password_hash: string;

    @ApiProperty({ enum: Role, enumName: 'enum-role' })
    role: Role; // роль (роль пользователя: администратор, пользователь).
}