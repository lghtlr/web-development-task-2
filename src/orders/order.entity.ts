import { ApiProperty } from '@nestjs/swagger';
import { Course } from '../courses/course.entity';
import { User } from '../users/user.entity';

export enum Status {
    Completed = 'completed', // оформлен
    Paid = 'paid', // оплачен
}

import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn
} from 'typeorm';

@Entity('orders') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
export class Order {

  @ApiProperty({ 
      example: '1', 
      description: 'Уникальный идентификатор',
    })
  @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
  id: number;

  @ApiProperty({ 
      example: Status, 
      description: 'Статус заказа',
  })
  @Column()
  status: Status; // статус (статус заказа: оформлен, оплачен.

  // https://github.com/typeorm/typeorm/blob/master/docs/many-to-one-one-to-many-relations.md
  // @OneToMany(() => Order2, (order) => order.user)
  // orders: Order2[]
  @ApiProperty({ 
    example: User, 
    description: 'Пользователь, которому принадлежит заказ',
  })
  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn()
  user: User;

  @ApiProperty({ 
    // example: Array<Course>, 
    description: 'Список курсов, которые входят в данный заказ',
  })
  @ManyToMany((type) => Course, (course) => course.orders) // Создадим связь многие ко многим с сущностью course и свяжем с полем orders в курсе
  @JoinTable({
    //join таблица с названием order_course
    name: 'order_course',
    joinColumn: { name: 'order_id' }, //для связи с идентификатором заказа
    inverseJoinColumn: { name: 'course_id' }, //для связи с идентификатором курса
  })
  courses: Course[]; //объект, в котором будем автоматически получать все курсы из заказа
}