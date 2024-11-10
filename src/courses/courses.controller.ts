import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CoursesService } from "./course.service";
import { Course } from "./course.entity";

@Controller('courses')
export class CoursesController {
    constructor(private readonly courseService: CoursesService) { }

    @Get()
    findAll(){
        return this.courseService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.courseService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCourse: Course) {
        return this.courseService.update(+id, updateCourse);
    }

    @Post()
    create(@Body() createCourse: Course) {
        return this.courseService.create(createCourse);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.courseService.delete(+id);
    }
}