import { ApiProperty } from "@nestjs/swagger";

export enum StatusDto {
    Completed = 'completed', // оформлен
    Paid = 'paid', // оплачен
}

export class OrderDto {
    @ApiProperty({ 
        // example: Array<Course>, 
        description: 'Список ID курсов, которые входят в данный заказ',
      })
    id_courses: number[];

    @ApiProperty({ 
        example: '1', 
        description: 'ID пользователя, которому принадлежит заказ',
      })
    id_user: number;

    @ApiProperty({ 
        example: StatusDto, 
        description: 'Статус заказа',
    })
    status: StatusDto; // статус (статус заказа: оформлен, оплачен.)
}
