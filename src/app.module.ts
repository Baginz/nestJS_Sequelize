import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/user.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User],
      //сам создавал таблицы в бд на основании наших моделей
      autoLoadModels: true,
    }),
    UsersModule,
  ],
  //Контроллеры обрабатывают всю логику за проверкой параметров запроса, запроса, отправки ответов с правильными кодами.
  controllers: [],
  //все что содержит логику и может исп в др. компонентах
  //Службы содержат запросы к базе данных и возвращающие объекты или метательные ошибки
  providers: [],
})
export class AppModule {}
