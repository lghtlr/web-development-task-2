import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesModule } from './courses/courses.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { DatasourceModule } from './datasource/datasource.module';

@Module({
  imports: [
    CoursesModule,
    UsersModule,
    OrdersModule,
    DatasourceModule,
    TypeOrmModule.forRoot({
      type: 'postgres', // тип подключаемой БД
      port: 5432, // порт
      username: 'leright',
      password: 'password',
      host: 'localhost', // хост (я развернула БД локально)
      synchronize: false, // отключаю автосинхронизацию(в противном случае при каждом перезапуске БД будет создаваться заново)
      logging: 'all', // включила логирование для удобства отслеживания процессов
      entities: ['src/**/*.entity{.ts,.js}'], //указала путь к сущностям  
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
