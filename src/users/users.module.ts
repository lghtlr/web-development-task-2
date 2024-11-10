import { Module } from '@nestjs/common'
import { UsersController } from './users.controller';
import { UsersService } from './user.service';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { User } from './user.entity';

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [User, DatasourceModule],
})
export class UsersModule { }