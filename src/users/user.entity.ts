import { ApiProperty } from "@nestjs/swagger";
import { Order } from "src/orders/order.entity";

export enum Role {
    User = 'user', // пользователь
    Admin = 'admin', // админ
}

// export class User {

//     //
//     constructor(id: number, login: string, password_hash: string, role: Role) {
//         this.id = id,
//         this.login = login,
//         this.password_hash = password_hash,
//         this.role = role;
//     }

//     @ApiProperty()
//     id: number;

//     @ApiProperty()
//     login: string;

//     @ApiProperty()
//     password_hash: string;

//     @ApiProperty({ enum: Role, enumName: 'enum-role' })
//     role: Role; // роль (роль пользователя: администратор, пользователь).
// }



import {
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity('users') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
  export class User {
    
    @ApiProperty()
    @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
    id: number;

    @ApiProperty()
    @Column({ unique: true }) //поле должно быть уникальным
    login: string;

    @ApiProperty()
    @Column()
    password_hash: string;

    @ApiProperty({ enum: Role, enumName: 'enum-role' })
    @Column()
    role: Role; // роль (роль пользователя: администратор, пользователь).

    @ApiProperty()
    @Column()
    @OneToMany(() => Order, (order) => order.user)
    orders: Order[];
}