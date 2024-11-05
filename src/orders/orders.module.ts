import { Module } from '@nestjs/common'
import { Order } from './order.entity';

@Module({
    controllers: [],
    providers: [],
    imports: [Order],
})
export class OrdersModule { }