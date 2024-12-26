import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { BooksModule } from './books/books.module';

async function bootstrap() {
  /*
  const app = await NestFactory.create(BooksModule);
  await app.listen(process.env.port ?? 3000);
  */

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    BooksModule,
      {
        transport: Transport.TCP,
        options: {
          port: 3002,
        },
      },
    );
  
    await app.listen();
}

bootstrap();
