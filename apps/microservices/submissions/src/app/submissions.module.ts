import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Submission, dbConfig, User } from '@multistep-wizard/db-config';
import { SubmissionsController } from './submissions.controller';
import { SubmissionsService } from './submissions.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...dbConfig, entities: [User, Submission] }),
    TypeOrmModule.forFeature([Submission]),
  ],
  controllers: [SubmissionsController],
  providers: [SubmissionsService],
})
export class SubmissionsModule {}
