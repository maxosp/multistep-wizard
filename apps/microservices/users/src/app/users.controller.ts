import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern('users.getById')
  getById(id: number) {
    return this.usersService.getById(id);
  }

  @MessagePattern('users.create')
  create() {
    return this.usersService.create();
  }
}
