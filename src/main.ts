import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createServer } from 'http';
import { IoAdapter } from '@nestjs/platform-socket.io';
import * as cors from 'cors';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors())
  // app.use(cors())
  // const httpServer = createServer(app.getHttpServer())
  // app.useWebSocketAdapter(new IoAdapter(httpServer));
  await app.listen(3000);
}
bootstrap();
