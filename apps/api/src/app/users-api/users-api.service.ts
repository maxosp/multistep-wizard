import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UsersApiService {
  constructor(@Inject('USERS_CLIENT') private usersClient: ClientProxy) {}

  getById(id: number) {
    return this.usersClient.send('users.getById', id);
  }

  create() {
    return this.usersClient.send('users.create', {});
  }
}
