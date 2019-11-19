import { Logger, Module } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { AnimalsController } from './animals.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalSchema } from './schemas/animal.schema';
import { AnimalsDao } from './dao/animals.dao';
import { RefugeSchema } from '../refuge/schemas/refuge.schema';
import { RefugesDao } from '../refuge/dao/refuges.dao';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Animal', schema: AnimalSchema}]),
  ],
  providers: [AnimalsService, Logger, AnimalsDao],
  controllers: [AnimalsController],
})
export class AnimalsModule {}
