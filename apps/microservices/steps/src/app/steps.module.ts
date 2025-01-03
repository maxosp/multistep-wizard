import { Module } from '@nestjs/common';
import { StepsController } from './steps.controller';
import { StepsService } from './steps.service';

@Module({
  imports: [],
  controllers: [StepsController],
  providers: [StepsService],
})
export class StepsModule {}
