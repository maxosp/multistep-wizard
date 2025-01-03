import { Module } from '@nestjs/common';
import { SubmissionsApiController } from './submissions-api/submissions-api.controller';
import { StepsApiController } from './steps-api/steps-api.controller';
import { UsersApiController } from './users-api/users-api.controller';
import { SubmissionsApiModule } from './submissions-api/submissions-api.module';
import { StepsApiModule } from './steps-api/steps-api.module';
import { UsersApiModule } from './users-api/users-api.module';

@Module({
  imports: [SubmissionsApiModule, StepsApiModule, UsersApiModule],
  controllers: [
    SubmissionsApiController,
    StepsApiController,
    UsersApiController,
  ],
})
export class AppModule {}
