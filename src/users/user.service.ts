import { Injectable } from "@nestjs/common";
import { Role, User } from "./user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { RoleDto, UserDto } from "./user.dto";
import { Order } from "src/orders/order.entity";

@Injectable()
export class UsersService { 
    constructor(
        // private readonly datasourceService: DatasourceService

        @InjectRepository(User)
        // "внедряю" репозиторий User в сервис
        private readonly userRepository: Repository<User>,
        @InjectRepository(Order)
        // "внедряю" репозиторий Order в сервис
        private readonly orderRepository: Repository<Order>,
    ) { }

    async create(userDto: UserDto): Promise<User> {
        const user = this.userRepository.create(); // создаю объект User из репозитория
        user.login = userDto.login;
        user.password_hash = userDto.password_hash;
        switch (userDto.role) {
            case RoleDto.Admin:
                user.role = Role.Admin;
            case RoleDto.User:
                user.role = Role.User;
        };
        const orders = await this.orderRepository.findBy({
            // получаю массив Order по id
            id: In(userDto.orders)
        });
        user.orders = orders;
        await this.userRepository.save(user); // сохраняю объект User в БД
        return user; // возвращаю объект User
    }

    findOne(id: number): Promise<User> {
        // Promise<User> - указывает, что функция возвращает объект 
        // User в виде Promise (c асинхронного потока)
        return this.userRepository.findOne({
            // получаю объект User по id
            where: { id }, // указываю условие поиска по id
            // получаю связанные объекты
            relations: {
                orders: true,
            },
        });
    }

    async findAll(): Promise<User[]> {
        const users = await this.userRepository.find({
            // получаю связанные объекты.
            // тут указываются элементы из других сущностей, которые 
            // хотелось бы включить в ответ на запрос.
            // Если не добавить relations, то в ответе будут только те поля,
            // что напрямую относятся к юзеру, без учета реляционного 
            // взаимодействия с другими сущностями, простыми словами в ответе 
            // не будет заказов
            relations: {
                orders: true,
            },
        }); // получаю массив User из БД
        return users; // взвращаю массив User
    }

    async update(id: number, updateUser: User) {
        // получаю объект User из БД для обновления (по id)
        const user = await this.userRepository.findOne({ 
            where: { id }
        });
        user.login = updateUser.login;
        user.password_hash = updateUser.password_hash;
        user.role = updateUser.role;
        user.orders = updateUser.orders;
        await this.userRepository.save(user); // сохраняю объект User в БД
        return user; // возвращаю объект User
    }

    delete(id: number) {
        this.userRepository.delete({ id }); // удалю объект User из БД
    }
}