import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api')
export class AppController {
  // делаем dependency injection
  constructor(private readonly appService: AppService) {}

  @Get('/users')
  getUsers() {
    return this.appService.getUsers();
  }
}
