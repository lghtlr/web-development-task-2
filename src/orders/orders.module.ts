import { Module } from '@nestjs/common'
import { OrdersController } from './orders.controller';
import { OrdersService } from './order.service';
import { DataSource } from 'typeorm';
import { Order } from './order.entity';

@Module({
    controllers: [OrdersController],
    providers: [OrdersService],
    imports: [Order, DataSource],
})
export class OrdersModule { }