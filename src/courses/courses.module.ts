import { Module } from '@nestjs/common'
import { CoursesController } from './courses.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { CoursesService } from './course.service';
import { Course } from './course.entity';

@Module({
    controllers: [CoursesController],
    providers: [CoursesService],
    imports: [Course, DatasourceModule],
})
export class CoursesModule { }