import { Logger, Module } from '@nestjs/common';

import { BenevolesService } from './benevoles.service';
import { BenevolesController } from './benevoles.controller';

@Module({
  providers: [Logger, BenevolesService],
  controllers: [BenevolesController],
})
export class BenevolesModule {}
