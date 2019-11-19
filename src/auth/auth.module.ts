import { Logger, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { BenevolesService } from '../benevoles/benevoles.service';
import { BenevolesDao } from '../benevoles/dao/benevoles.dao';
import { MongooseModule } from '@nestjs/mongoose';
import { BenevoleSchema } from '../benevoles/schemas/benevole.schema';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s'},
    }),
    MongooseModule.forFeature([{ name: 'Benevole', schema: BenevoleSchema}])
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, BenevolesService, BenevolesDao, Logger],
  exports: [LocalStrategy, AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
