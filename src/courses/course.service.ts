import { Injectable } from "@nestjs/common";
import { Course } from "./course.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { CourseDto } from "./course.dto";
import { Order } from "src/orders/order.entity";

@Injectable()
export class CoursesService  { 
    constructor(
        //private readonly datasourceService: DatasourceService

        @InjectRepository(Course)
        // "внедряю" репозиторий Course в сервис
        private readonly courseRepository: Repository<Course>,
        @InjectRepository(Order)
        // "внедряю" репозиторий Order в сервис
        private readonly orderRepository: Repository<Order>,
    ) { }

    async create(courseDto: CourseDto): Promise<Course> {
        // создаю объект Course из репозитория
        const course = this.courseRepository.create();
        course.name = courseDto.name;
        course.description = courseDto.description;
        const orders = await this.orderRepository.findBy({
            // получаю массив Order по id
            id: In(courseDto.orders)
        });
        course.orders = orders;
        await this.courseRepository.save(course); // сохраняю объект Course в БД
        return course;
    }

    findOne(id: number): Promise<Course> {
        // Promise<Course> - указывает, что функция возвращает объект 
        // Course в виде Promise (c асинхронного потока)
        return this.courseRepository.findOne({
            // получаю объект Course по id
            where: { id }, // указываю условие поиска по id
            // получаю связанные объекты
            relations: {
                orders: true,
            },
        });
    }

    async findAll(): Promise<Course[]> {
        const courses = await this.courseRepository.find({
             // получаю связанные объекты.
            // тут указываются элементы из других сущностей, которые 
            // хотелось бы включить в ответ на запрос.
            // Если не добавить relations, то в ответе будут только те поля,
            // что напрямую относятся к курсу, без учета реляционного 
            // взаимодействия с другими сущностями, простыми словами в ответе 
            // не будет заказов
            relations: {
                orders: true,
            },
        }); // получаю массив Course из БД
        return courses; // возвращаю массив Course
    }

    async update(id: number, updateCourse: Course) {
        // получаю объект Course из БД для обновления (по id)
        const course = await this.courseRepository.findOne({
            where: { id }
        });
        course.name = updateCourse.name;
        course.description = updateCourse.description;
        course.orders = updateCourse.orders;
        await this.courseRepository.save(course); // сохраняю объект Course в БД
        return course; // возвращаю объект Course
    }

    delete(id: number) {
        this.courseRepository.delete({ id });
    }
}