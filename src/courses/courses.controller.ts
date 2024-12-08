import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CoursesService } from "./course.service";
import { Course } from "./course.entity";
import { CourseDto } from "./course.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@Controller('courses')
@ApiTags('Курсы') // заголовок раздела в сваггере
export class CoursesController {
    constructor(private readonly courseService: CoursesService) { }

    @ApiOperation({ summary: 'Поиск всех курсов' }) // операция для сваггера
    @Get()
    findAll(){
        return this.courseService.findAll();
    }

    @ApiOperation({ summary: 'Поиск курса по id' }) // операция для сваггера
    @Get(':id')
    findOne(@Param('id') id: string) {
        // + == конвертация строки в число
        return this.courseService.findOne(+id);
    }

    @ApiOperation({ summary: 'Обновление курса по id' }) // операция для сваггера
    @Put(':id')
    update(@Param('id') id: string, @Body() updateCourse: Course) {
        // + == конвертация строки в число
        return this.courseService.update(+id, updateCourse);
    }

    @ApiOperation({ summary: 'Создать новый курс' }) // операция для сваггера
    @Post()
    create(@Body() createCourse: CourseDto) {
        return this.courseService.create(createCourse);
    }

    @ApiOperation({ summary: 'Удаление курса по id' }) // операция для сваггера
    @Delete(':id')
    remove(@Param('id') id: string) {
        // + == конвертация строки в число
        return this.courseService.delete(+id);
    }
}