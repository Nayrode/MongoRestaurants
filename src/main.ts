import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Connect to MongoDB
  await mongoose.connect('mongodb://localhost:27017/restaurant');

  await app.listen(3000);
}
bootstrap();