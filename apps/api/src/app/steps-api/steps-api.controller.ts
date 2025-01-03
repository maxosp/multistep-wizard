import { Controller, Get } from '@nestjs/common';
import { StepsApiService } from './steps-api.service';

@Controller('steps')
export class StepsApiController {
  constructor(private readonly stepsApiService: StepsApiService) {}

  @Get()
  getAll() {
    return this.stepsApiService.getAll();
  }
}
