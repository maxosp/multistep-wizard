import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class StepsApiService {
  constructor(@Inject('STEPS_CLIENT') private stepsClient: ClientProxy) {}

  getAll() {
    return this.stepsClient.send('steps.getAll', {});
  }
}
