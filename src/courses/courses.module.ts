import { Module } from '@nestjs/common'
import { Course } from './course.entity';

@Module({
    controllers: [],
    providers: [],
    imports: [Course]
})
export class CoursesModule { }