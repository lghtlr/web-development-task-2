import { Module } from '@nestjs/common'
import { OrdersController } from './orders.controller';
import { OrdersService } from './order.service';
import { DataSource } from 'typeorm';

@Module({
    controllers: [OrdersController],
    providers: [OrdersService],
    imports: [DataSource],
})
export class OrdersModule { }