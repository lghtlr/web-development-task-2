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
    
    @ApiProperty({ 
      example: '1', 
      description: 'Уникальный идентификатор',
    })
    @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
    id: number;

    @ApiProperty({ 
      example: 'leright', 
      description: 'Логин пользователя (уникальное поле)',
    })
    @Column({ unique: true }) //поле должно быть уникальным
    login: string;

    @ApiProperty({ 
      example: 'f03881a88c6e39135f0ecc60efd609b9', 
      description: 'Хэш пароля пользователя',
    })
    @Column()
    password_hash: string;

    @ApiProperty({ 
      example: Role, 
      description: 'Роль пользователя',
    })
    @Column()
    role: Role; // роль (роль пользователя: администратор, пользователь).

    @ApiProperty({ 
      // example: Array<Order>, 
      description: 'Список заказов пользователя',
    })
    // @Column({ array: true })
    @OneToMany(() => Order, (order) => order.user)
    orders: Order[];
}