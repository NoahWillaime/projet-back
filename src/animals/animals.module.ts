import { Logger, Module } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { AnimalsController } from './animals.controller';

@Module({
  providers: [AnimalsService, Logger],
  controllers: [AnimalsController],
  exports: [AnimalsService],
})
export class AnimalsModule {}
