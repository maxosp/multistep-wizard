import { Module } from '@nestjs/common';
import { StepsApiController } from './steps-api.controller';
import { StepsApiService } from './steps-api.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'STEPS_CLIENT',
        transport: Transport.TCP,
        options: { port: 3002 },
      },
    ]),
  ],
  controllers: [StepsApiController],
  providers: [StepsApiService],
  exports: [StepsApiService],
})
export class StepsApiModule {}
