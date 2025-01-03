import { Module } from '@nestjs/common';
import { UsersApiController } from './users-api.controller';
import { UsersApiService } from './users-api.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USERS_CLIENT',
        transport: Transport.TCP,
        options: { port: 3003 },
      },
    ]),
  ],
  controllers: [UsersApiController],
  providers: [UsersApiService],
  exports: [UsersApiService],
})
export class UsersApiModule {}
