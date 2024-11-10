import { Module } from '@nestjs/common'
import { OrdersController } from './orders.controller';
import { OrdersService } from './order.service';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { Order } from './order.entity';

@Module({
    controllers: [OrdersController],
    providers: [OrdersService],
    imports: [Order, DatasourceModule],
})
export class OrdersModule { }