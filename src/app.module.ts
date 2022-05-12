import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [],
      //сам создавал таблицы в бд на основании наших моделей
      autoLoadModels: true,
    }),
    UsersModule,
  ],
  //Контроллеры обрабатывают всю логику за проверкой параметров запроса, запроса, отправки ответов с правильными кодами.
  controllers: [AppController],
  //все что содержит логику и может исп в др. компонентах
  //Службы содержат запросы к базе данных и возвращающие объекты или метательные ошибки
  providers: [AppService],
})
export class AppModule {}
