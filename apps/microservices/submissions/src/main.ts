/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core';
import { SubmissionsModule } from './app/submissions.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    SubmissionsModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3001,
      },
    }
  );

  await app.listen();
}

bootstrap();
