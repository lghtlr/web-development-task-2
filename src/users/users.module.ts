import { Module } from '@nestjs/common'
import { UsersController } from './users.controller';
import { UsersService } from './user.service';
import { DatasourceModule } from 'src/datasource /datasource.module';

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [DatasourceModule],
})
export class UsersModule { }