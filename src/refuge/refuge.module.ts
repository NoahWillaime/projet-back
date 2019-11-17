import { Logger, Module } from '@nestjs/common';
import { RefugeController } from './refuge.controller';
import { RefugeService } from './refuge.service';
import { RefugesDao } from './dao/refuges.dao';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalSchema } from '../animals/schemas/animal.schema';
import { RefugeSchema } from './schemas/refuge.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Refuge', schema: RefugeSchema}])],
  controllers: [RefugeController],
  providers: [RefugeService, RefugesDao, Logger]
})
export class RefugeModule {}
