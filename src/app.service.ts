import { Injectable } from '@nestjs/common';

//сервис будем внедрять в контроллер делать иньекцию
@Injectable()
export class AppService {
  getUsers() {
    return [{ id: 1, name: 'egor' }, { id: 2, name: 'vitaliy' }];
  }
}
