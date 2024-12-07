import { Module } from '@nestjs/common'
import { CoursesController } from './courses.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { CoursesService } from './course.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './course.entity';
import { Order } from '../orders/order.entity';

@Module({
    controllers: [CoursesController],
    providers: [CoursesService],
    imports: [
        DatasourceModule,
        // в этом можуле использованы 2 сущности: Course, Order; их и импортируем
        TypeOrmModule.forFeature([Course, Order]),
    ],
})
export class CoursesModule { }