import { ApiProperty } from "@nestjs/swagger";

enum Status {
    Completed = 'completed', // оформлен
    Paid = 'paid', // оплачен
}

export class Order {

    @ApiProperty()
    id: number;

    @ApiProperty()
    id_course: number;

    @ApiProperty()
    id_user: number;

    @ApiProperty({ enum: Status, enumName: 'enum-status' })
    status: Status; // статус (статус заказа: оформлен, оплачен.
}