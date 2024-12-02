import { OrderDto } from "src/orders/order.dto";

export class CourseDto {
    name: string;
    description: string;
    orders: OrderDto[];
}