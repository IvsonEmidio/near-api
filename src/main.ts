import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import generateOrmConfig from './config/generate-ormconfig';

async function bootstrap() {
  generateOrmConfig();

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
