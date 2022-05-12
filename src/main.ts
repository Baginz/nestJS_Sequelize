import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  //создаем экземпляр приложения и передаем модуль
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => console.log(`Server started port ${PORT}`));
}
bootstrap();
