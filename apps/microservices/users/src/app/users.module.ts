import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Submission, dbConfig, User } from '@multistep-wizard/db-config';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...dbConfig, entities: [User, Submission] }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
