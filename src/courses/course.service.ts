import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Course } from "./course.entity";

@Injectable()
export class CoursesService  { 
    constructor(private readonly datasourceService: DatasourceService) { }

    create(course: Course) {
        this.datasourceService.getCources().push(course);
        return course;
    }

    findOne(id: number) {
        return this.datasourceService
            .getCources()
            .find((course) => course.id === id);
    }

    findAll(): Course[] {
        return this.datasourceService.getCources();   
    }

    update(id: Number, updateCourse: Course) {
        const index = this.datasourceService
            .getCources()
            .findIndex((course) => course.id === id);
        this.datasourceService.getCources() [index] = updateCourse;
        return this.datasourceService.getCources() [index];
    }

    delete(id: Number) {
        const index = this.datasourceService
            .getCources()
            .findIndex((course) => course.id === id);
        this.datasourceService.getCources().splice(index, 1);
        return HttpStatus.OK;
    }
}