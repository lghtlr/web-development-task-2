import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CoursesService } from "./course.service";
import { Course } from "./course.entity";
import { CourseDto } from "./course.dto";
import { ApiTags } from "@nestjs/swagger";

@Controller('courses')
@ApiTags('Курсы') // заголовок раздела в сваггере
export class CoursesController {
    constructor(private readonly courseService: CoursesService) { }

    @Get()
    findAll(){
        return this.courseService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        // + == конвертация строки в число
        return this.courseService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCourse: Course) {
        // + == конвертация строки в число
        return this.courseService.update(+id, updateCourse);
    }

    @Post()
    create(@Body() createCourse: CourseDto) {
        return this.courseService.create(createCourse);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        // + == конвертация строки в число
        return this.courseService.delete(+id);
    }
}