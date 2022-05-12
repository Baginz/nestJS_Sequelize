import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'nestdb',
      models: [],
      //создавал таблицы в бд на основании наших моделей
      autoLoadModels: true,
    }),
  ],
  //Контроллеры обрабатывают всю логику за проверкой параметров запроса, запроса, отправки ответов с правильными кодами.
  controllers: [AppController],
  //все что содержит логику и может исп в др. компонентах
  //Службы содержат запросы к базе данных и возвращающие объекты или метательные ошибки
  providers: [AppService],
})
export class AppModule {}
