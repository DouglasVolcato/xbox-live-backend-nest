import { NestFactory } from '@nestjs/core';
import { AppModule } from './main/nest-adapter/modules/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('xbox-live-backend')
    .setVersion('1.0.0')
    .addTag('api-test')
    .addTag('user')
    .addTag('profile')
    .addTag('game')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
