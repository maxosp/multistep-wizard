import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 8001,
  username: 'postgres',
  password: 'password',
  database: 'postgres',
  synchronize: true,
  logging: true,
};
