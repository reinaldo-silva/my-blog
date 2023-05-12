import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeormConfig from './config/typeorm.config';
import { UserModule } from './user/user.module';
import { AuthorsModule } from './authors/authors.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig), UserModule, AuthorsModule],
})
export class AppModule {}
