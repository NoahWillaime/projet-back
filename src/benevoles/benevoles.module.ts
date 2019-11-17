import { Logger, Module } from '@nestjs/common';

import { BenevolesService } from './benevoles.service';
import { BenevolesController } from './benevoles.controller';
import { BenevolesDao } from './dao/benevoles.dao';
import { MongooseModule } from '@nestjs/mongoose';
import { BenevoleSchema } from './schemas/benevole.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Benevole', schema: BenevoleSchema}])],
  providers: [Logger, BenevolesService, BenevolesDao],
  exports: [BenevolesService],
  controllers: [BenevolesController],
})
export class BenevolesModule {}
