import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AnimalsModule } from './animals/animals.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BenevolesModule } from './benevoles/benevoles.module';

@Module({
  imports: [AuthModule, UsersModule, AnimalsModule,
    MongooseModule.forRoot('mongodb://localhost/projetdb', {    useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false}),
    BenevolesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
