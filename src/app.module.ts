import { Logger, Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AnimalsModule } from './animals/animals.module';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { BenevolesModule } from './benevoles/benevoles.module';
import { RefugeModule } from './refuge/refuge.module';
import { WelcomeModule } from './welcome/welcome.module';
import * as Config from 'config';

@Module({
  imports: [AuthModule,
    AnimalsModule,
    MongooseModule.forRoot(Config.get<string>('mongodb.uri'), Config.get<MongooseModuleOptions>('mongodb.options')),
    BenevolesModule,
    RefugeModule,
    WelcomeModule,
  ]
})
export class AppModule {}
