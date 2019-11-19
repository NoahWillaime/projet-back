import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as Config from 'config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { SwaggerConfig } from './interfaces/swagger-config.interface';
import { AppConfig } from './interfaces/app-config.interface';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AnimalsModule } from './animals/animals.module';
import { RefugeModule } from './refuge/refuge.module';
import { BenevolesModule } from './benevoles/benevoles.module';
import { AuthModule } from './auth/auth.module';

async function bootstrap(config: AppConfig, swaggerConfig: SwaggerConfig) {

  const app = await NestFactory.create<NestFastifyApplication>(AppModule,
    new FastifyAdapter({ logger: true }),
  );

  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const options = new DocumentBuilder()
    .setTitle(swaggerConfig.tilte)
    .setDescription(swaggerConfig.description)
    .setVersion(swaggerConfig.version)
    .addTag(swaggerConfig.tagAuth)
    .addTag(swaggerConfig.tagAnimals)
    .addTag(swaggerConfig.tagBenevoles)
    .addTag(swaggerConfig.tagRefuge)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options, {
    include: [ AnimalsModule, RefugeModule, BenevolesModule, AuthModule ],
  });
  SwaggerModule.setup(swaggerConfig.tag, app, document);
  await app.listen(config.port, config.host);
  Logger.log(`Application served at http://${config.host}:${config.port}`, 'bootstrap');
  Logger.log(`Documentation at http://${config.host}:${config.port}/${swaggerConfig.tag}`, 'bootstrap');
}
bootstrap(Config.get<AppConfig>('server'), Config.get<SwaggerConfig>('swagger'));
