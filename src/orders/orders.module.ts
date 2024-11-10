import { Module } from '@nestjs/common'
import { OrdersController } from './orders.controller';
import { OrdersService } from './order.service';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module({
    controllers: [OrdersController],
    providers: [OrdersService],
    imports: [DatasourceModule],
})
export class OrdersModule { }