import { Logger, Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AnimalsModule } from './animals/animals.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BenevolesModule } from './benevoles/benevoles.module';
import { RefugeModule } from './refuge/refuge.module';
import { WelcomeModule } from './welcome/welcome.module';

@Module({
  imports: [AuthModule,
    AnimalsModule,
    MongooseModule.forRoot('mongodb://localhost:27020/projetdb', {    useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false}),
    BenevolesModule,
    RefugeModule,
    WelcomeModule,
  ]
})
export class AppModule {}
