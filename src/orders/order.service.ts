import { Injectable } from "@nestjs/common";
import { Order, Status } from "./order.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { User } from "src/users/user.entity";
import { Course } from "src/courses/course.entity";
import { OrderDto, StatusDto } from "./order.dto";

@Injectable()
export class OrdersService { 
    constructor(
        // private readonly datasourceService: DatasourceService

        @InjectRepository(Order)
        // "внедряю" репозиторий Order в сервис
        private readonly orderRepository: Repository<Order>,
        @InjectRepository(User)
        // "внедряю" репозиторий User в сервис
        private readonly userRepository: Repository<User>,
        @InjectRepository(Course)
        // "внедряю" репозиторий Course в сервис
        private readonly courseRepository: Repository<Course>,
    ) { }

    async create(orderDto: OrderDto): Promise<Order> {
        const order = this.orderRepository.create(); // создаю объект Order из репозитория
        switch (orderDto.status) {
            case StatusDto.Completed:
                order.status = Status.Completed;
            case StatusDto.Paid:
                order.status = Status.Paid;
        };
        order.user = await this.userRepository.findOne({
            relations: {
                orders: true,
            },
        });
        const cources = await this.courseRepository.findBy({
            // получаю массив Course по id
            id: In(orderDto.id_courses)
        })
        order.courses = cources;
        await this.orderRepository.save(order); // сохраняю объект Order в БД
        return order; // возвращаю объект Order
    }

    findOne(id: number): Promise<Order> {
        // Promise<Order> - указывает, что функция возвращает объект 
        // Order в виде Promise (c асинхронного потока)
        return this.orderRepository.findOne({
            // получаю объект Order по id
            where: { id }, // указываю условие поиска по id
            // получаю связанные объекты
            relations: {
                user: true,
                courses: true,
            },
        });
    }

    async findAll(): Promise<Order[]> {
        const orders = await this.orderRepository.find({
            // получаю связанные объекты.
            // тут указываются элементы из других сущностей, которые 
            // хотелось бы включить в ответ на запрос.
            // Если не добавить relations, то в ответе будут только те поля,
            // что напрямую относятся к заказу, без учета реляционного 
            // взаимодействия с другими сущностями, простыми словами в ответе 
            // не будет юзеров и курсов
            relations: {
                user: true,
                courses: true,
            }
        }); // получаю массив Order из БД
        return orders; // взвращаю массив Order
    }

    async update(id: number, updateOrder: Order) {
        // получаю объект Order из БД для обновления (по id)
        const order = await this.orderRepository.findOne({
            where: { id }
        });
        order.status = updateOrder.status;
        order.user = updateOrder.user;
        order.courses = updateOrder.courses;
        await this.orderRepository.save(order); // сохраняю объект Order в БД
        return order; // возвращаю объект Order
        
    }

    delete(id: number) {
        this.orderRepository.delete({ id }); // удалю объект Order из БД
    }
 }