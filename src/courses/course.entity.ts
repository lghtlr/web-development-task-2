import { ApiProperty } from "@nestjs/swagger";
import { Order } from "src/orders/order.entity";

// export class Course {

//     constructor(id: number, name: string, description: string) {
//         this.id = id,
//         this.name = name,
//         this.description = description;
//     }
    
//     //
//     @ApiProperty()
//     id: number;
    
//     @ApiProperty()
//     name: string;

//     @ApiProperty()
//     description: string;
// }



import {
    Column,
    Entity,
    ManyToMany,
    JoinTable,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity('users') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
  export class Course {
    
    @ApiProperty()
    @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
    id: number;

    @ApiProperty()
    @Column()
    name: string;

    @ApiProperty()
    @Column()
    description: string;

    @ApiProperty()
    @ManyToMany((type) => Order, (order) => order.courses) // Создадим связь многие ко многим с сущностью order и свяжем с полем courses в заказе
    @JoinTable({
        //join таблица с названием order_course
        name: 'order_course',
        joinColumn: { name: 'course_id' }, //для связи с идентификатором курса
        inverseJoinColumn: { name: 'order_id' }, //для связи с идентификатором заказа
    })
    orders: Order[]; //объект, в котором будем автоматически получать все заказы для курса
}