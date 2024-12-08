import { ApiProperty } from '@nestjs/swagger';
import { Order } from '../orders/order.entity';

export enum Role {
    User = 'user', // пользователь
    Admin = 'admin', // админ
}

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
    // @Column({ array: true })
    @OneToMany(() => Order, (order) => order.user)
    orders: Order[];
}