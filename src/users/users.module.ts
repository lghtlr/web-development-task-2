import { Module } from '@nestjs/common'
import { UsersController } from './users.controller';
import { UsersService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Order } from '../orders/order.entity';

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [
        // тут использовала 2 сущности, и их импортировала
        TypeOrmModule.forFeature([User, Order]),
    ],
})
export class UsersModule { }