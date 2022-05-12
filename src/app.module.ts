import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  //Контроллеры обрабатывают всю логику за проверкой параметров запроса, запроса, отправки ответов с правильными кодами.
  controllers: [AppController],
  //все что содержит логику и может исп в др. компонентах
  //Службы содержат запросы к базе данных и возвращающие объекты или метательные ошибки
  providers: [AppService],
})
export class AppModule {}
