import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Creamos el servidor
  const app = await NestFactory.create(AppModule);

  // Lanzamos el servidor
  await app.listen(process.env.PORT ?? 3000);

  console.log('Servidor ejecutandose en el puerto 3000');
}
bootstrap();
