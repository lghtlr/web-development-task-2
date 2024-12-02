import { Module } from '@nestjs/common'
import { UsersController } from './users.controller';
import { UsersService } from './user.service';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Order } from 'src/orders/order.entity';

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [
        DatasourceModule,
        // тут использовала 2 сущности, и их импортировала
        TypeOrmModule.forFeature([User, Order]),
    ],
})
export class UsersModule { }