import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as Config from 'config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { SwaggerConfig } from './interfaces/swagger-config.interface';
import { AppConfig } from './interfaces/app-config.interface';

async function bootstrap(config: AppConfig, swaggerConfig: SwaggerConfig) {

  const app = await NestFactory.create<NestFastifyApplication>(AppModule,
    new FastifyAdapter({ logger: true }),
  );

  const options = new DocumentBuilder()
    .setTitle(swaggerConfig.tilte)
    .setDescription(swaggerConfig.description)
    .setVersion(swaggerConfig.version)
    .addTag(swaggerConfig.tag)
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(config.port, config.host);
}
bootstrap(Config.get<AppConfig>('server'), Config.get<SwaggerConfig>('swagger'));
