import { Logger, Module } from '@nestjs/common';
import { RefugeController } from './refuge.controller';
import { RefugeService } from './refuge.service';
import { RefugesDao } from './dao/refuges.dao';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalSchema } from '../animals/schemas/animal.schema';
import { RefugeSchema } from './schemas/refuge.schema';
import { AnimalsDao } from '../animals/dao/animals.dao';
import { AnimalsService } from '../animals/animals.service';
import { BenevolesService } from '../benevoles/benevoles.service';
import { BenevolesDao } from '../benevoles/dao/benevoles.dao';
import { BenevoleSchema } from '../benevoles/schemas/benevole.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Refuge', schema: RefugeSchema}]),
    MongooseModule.forFeature([{ name: 'Animal', schema: AnimalSchema}]),
    MongooseModule.forFeature([{ name: 'Benevole', schema: BenevoleSchema}])
  ],
  controllers: [RefugeController],
  providers: [RefugeService, RefugesDao, Logger, AnimalsDao, AnimalsService, BenevolesService, BenevolesDao]
})
export class RefugeModule {}
