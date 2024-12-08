import { Module } from '@nestjs/common'
import { OrdersController } from './orders.controller';
import { OrdersService } from './order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { User } from '../users/user.entity';
import { Course } from '../courses/course.entity';

@Module({
    controllers: [OrdersController],
    providers: [OrdersService],
    imports: [
        // тут использовала 3 сущности, и все их импортировала
        TypeOrmModule.forFeature([Order, User, Course]),
    ],
})
export class OrdersModule { }