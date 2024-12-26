import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { UsersModule } from './users.module';

async function bootstrap() {
  /*
  const app = await NestFactory.create(UsersModule);
  await app.listen(process.env.port ?? 3000);
  */

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UsersModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3001,
      },
    },
  );

  await app.listen();
}

bootstrap();