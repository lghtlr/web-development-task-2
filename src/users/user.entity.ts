import { ApiProperty } from "@nestjs/swagger";

enum Role {
    User = 'user', // пользователь
    Admin = 'admin', // админ
}

export class User {

    @ApiProperty()
    id: number;

    @ApiProperty()
    login: string;

    @ApiProperty()
    password_hash: string;

    @ApiProperty({ enum: Role, enumName: 'enum-role' })
    role: Role; // роль (роль пользователя: администратор, пользователь).
}