import { ApiProperty } from "@nestjs/swagger";
import { OrderDto } from "src/orders/order.dto";

export enum RoleDto {
    User = 'user', // пользователь
    Admin = 'admin', // админ
}

export class UserDto {
    @ApiProperty({ 
        example: 'leright', 
        description: 'Логин пользователя (уникальное поле)',
      })
    login: string;

    @ApiProperty({ 
        example: 'f03881a88c6e39135f0ecc60efd609b9', 
        description: 'Хэш пароля пользователя',
    })
    password_hash: string;

    @ApiProperty({ 
        example: RoleDto, 
        description: 'Роль пользователя',
      })
    role: RoleDto; // роль (роль пользователя: администратор, пользователь).

    @ApiProperty({ 
        // example: Array<OrderDto>, 
        description: 'Список заказов пользователя',
    })
    orders: OrderDto[];
}
