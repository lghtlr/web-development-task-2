export class OrderDto {
    id_course: number[];
    id_user: number;
    status: StatusDto; // статус (статус заказа: оформлен, оплачен.
}

export enum StatusDto {
    Completed = 'completed', // оформлен
    InProgress = 'in_progress', // оформлен
    Paid = 'paid', // оплачен
}
