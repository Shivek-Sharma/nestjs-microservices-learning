import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [UsersModule, BooksModule],
  controllers: [],
  providers: [],
})
export class BookstoreApiGatewayModule {}
