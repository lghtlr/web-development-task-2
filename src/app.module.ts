import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesModule } from './courses/courses.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    CoursesModule,
    UsersModule,
    OrdersModule,
    TypeOrmModule.forRoot({
      type: 'postgres', // тип подключаемой БД
      port: 5432, // порт
      database: 'leright',
      username: 'leright',
      password: 'password',
      autoLoadEntities: true,
      host: 'localhost', // хост (я развернула БД локально)
      synchronize: false, // отключаю автосинхронизацию(в противном случае при каждом перезапуске БД будет создаваться заново)
      logging: 'all', // включила логирование для удобства отслеживания процессов
      entities: ['dist/src/**/*.entity{.ts,.js}'], //указала путь к сущностям  
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
