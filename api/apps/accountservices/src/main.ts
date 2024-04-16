import { NestFactory } from '@nestjs/core';
import { AccountservicesModule } from './accountservices.module';

async function bootstrap() {
  const app = await NestFactory.create(AccountservicesModule);
  await app.listen(3000);
}
bootstrap();
