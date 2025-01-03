import { Module } from '@nestjs/common';
import { SubmissionsApiController } from './submissions-api.controller';
import { SubmissionsApiService } from './submissions-api.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SUBMISSION_CLIENT',
        transport: Transport.TCP,
        options: { port: 3001 },
      },
    ]),
  ],
  controllers: [SubmissionsApiController],
  providers: [SubmissionsApiService],
  exports: [SubmissionsApiService],
})
export class SubmissionsApiModule {}
