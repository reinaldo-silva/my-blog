import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';

export default {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'mublog',
  database: 'mublog',
  entities: [User],
  synchronize: false,
  logging: true,
  cli: {
    migrationsDir: 'migrations',
  },
} as TypeOrmModuleOptions;
