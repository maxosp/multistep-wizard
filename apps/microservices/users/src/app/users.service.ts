import { User } from '@multistep-wizard/db-config';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>
  ) {}

  async getById(id) {
    return await this.usersRepository.findOne({
      where: {
        id,
      },
    });
  }

  async create() {
    const newUser = new User();
    return this.usersRepository.save(newUser);
  }
}
