import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Courses Site API')
    .setVersion('1.0')
    .build() // сконфигурировала сборщик документации

    const document = SwaggerModule.createDocument(app, config); // создала api документацию

    SwaggerModule.setup('api_docs', app, document) // включила доку Swagger по пути localhost:3001/api_docs

    await app.listen(3001); // установила порт прослушивания 3001

    app.setGlobalPrefix('/api'); // установила глобальный префикс для роутов контроллеров
}
bootstrap();
