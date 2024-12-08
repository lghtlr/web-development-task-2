import { ApiProperty } from "@nestjs/swagger";
import { OrderDto } from "src/orders/order.dto";

export class CourseDto {

    @ApiProperty({ 
        example: 'Курсы по мобильной разработке', 
        description: 'Название курса',
      })
    name: string;

    @ApiProperty({ 
        example: 'На данном курсе вы научитесь создавать мобильные приложения.' 
        + 'Вы изучите все необходимые для этого интрументы: ...', 
        description: 'Описание курса',
      })
    description: string;

    @ApiProperty({ 
        // example: Array<OrderDto>,
        description: 'Список заказов, в которые входит данный курс',
    })
    orders: OrderDto[];
}