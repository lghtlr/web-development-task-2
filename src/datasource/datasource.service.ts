import { Injectable } from '@nestjs/common';
import { Course } from 'src/courses/course.entity';
import { Order } from 'src/orders/order.entity';
import { User } from 'src/users/user.entity'

@Injectable()
export class DatasourceService {

    private users: User[] = [];
    private orders: Order[] = [];
    private cources: Course[] = [];

    getUsers(): User[] {
        return this.users
    }

    getOrders(): Order[] {
        return this.orders
    }

    getCources(): Course[] {
        return this.cources
    }
}
