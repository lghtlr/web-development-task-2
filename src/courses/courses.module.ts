import { Module } from '@nestjs/common'
import { CoursesController } from './courses.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { CoursesService } from './course.service';

@Module({
    controllers: [CoursesController],
    providers: [CoursesService],
    imports: [DatasourceModule],
})
export class CoursesModule { }