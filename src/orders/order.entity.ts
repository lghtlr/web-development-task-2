import { ApiProperty } from "@nestjs/swagger";

export enum Status {
    Completed = 'completed', // оформлен
    Paid = 'paid', // оплачен
}

export class Order {

    constructor(id: number, id_course: number, id_user: number, status: Status) {
        this.id = id,
        this.id_course = id_course,
        this.id_user = id_user,
        this.status = status;
    }

    @ApiProperty()
    id: number;

    @ApiProperty()
    id_course: number;

    @ApiProperty()
    id_user: number;

    @ApiProperty({ enum: Status, enumName: 'enum-status' })
    status: Status; // статус (статус заказа: оформлен, оплачен.
}