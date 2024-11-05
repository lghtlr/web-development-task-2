import { Module } from '@nestjs/common';
import { CoursesModule } from './courses/courses.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [CoursesModule, UsersModule, OrdersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
