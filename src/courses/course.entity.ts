import { ApiProperty } from '@nestjs/swagger';
import { Order } from '../orders/order.entity';

import {
    Column,
    Entity,
    ManyToMany,
    JoinTable,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity('courses') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
  export class Course {

    @ApiProperty({ 
      example: '1', 
      description: 'Уникальный идентификатор',
    })
    @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
    id: number;

    @ApiProperty({ 
      example: 'Курсы по мобильной разработке', 
      description: 'Название курса',
    })
    @Column()
    name: string;

    @ApiProperty({ 
      example: 'На данном курсе вы научитесь создавать мобильные приложения.' 
      + 'Вы изучите все необходимые для этого интрументы: ...', 
      description: 'Описание курса',
    })
    @ApiProperty()
    @Column()
    description: string;

    @ApiProperty({ 
      example: Order,
      description: 'Список заказов, в которые входит данный курс',
    })
    @ManyToMany((type) => Order, (order) => order.courses) // Создадим связь многие ко многим с сущностью order и свяжем с полем courses в заказе
    @JoinTable({
        //join таблица с названием order_course
        name: 'order_course',
        joinColumn: { name: 'course_id' }, //для связи с идентификатором курса
        inverseJoinColumn: { name: 'order_id' }, //для связи с идентификатором заказа
    })
    orders: Order[]; //объект, в котором будем автоматически получать все заказы для курса
}