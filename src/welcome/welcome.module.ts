import { Module } from '@nestjs/common';
import { WelcomeService } from './welcome.service';
import { WelcomeController } from './welcome.controller';

@Module({
  providers: [WelcomeService],
  controllers: [WelcomeController],
})
export class WelcomeModule {}
