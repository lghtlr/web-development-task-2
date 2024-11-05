import { Module } from '@nestjs/common'
import { User } from './user.entity';

@Module({
    controllers: [],
    providers: [],
    imports: [User],
})
export class UsersModule { }