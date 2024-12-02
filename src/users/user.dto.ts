import { OrderDto } from "src/orders/order.dto";

export class UserDto {
    login: string;
    password_hash: string;
    role: RoleDto; // роль (роль пользователя: администратор, пользователь).
    orders: OrderDto[];
}

export enum RoleDto {
    User = 'user', // пользователь
    Admin = 'admin', // админ
}