import { Controller, Get, Param, Post } from '@nestjs/common';
import { UsersApiService } from './users-api.service';

@Controller('users')
export class UsersApiController {
  constructor(private usersApiService: UsersApiService) {}

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.usersApiService.getById(id);
  }

  @Post()
  create() {
    return this.usersApiService.create();
  }
}
