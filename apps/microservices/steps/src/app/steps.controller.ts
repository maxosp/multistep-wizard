import { Controller } from '@nestjs/common';
import { StepsService } from './steps.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class StepsController {
  constructor(private readonly stepsService: StepsService) {}

  @MessagePattern('steps.getAll')
  getAll() {
    return this.stepsService.getAll();
  }
}
