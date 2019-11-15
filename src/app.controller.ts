import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse, ApiUnauthorizedResponse, ApiUseTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { AuthGuard } from '@nestjs/passport';
import { LocalStrategy } from './auth/local.strategy';
import { ConnectUserDto } from './auth/dto/connect-user.dto';

@ApiUseTags('app')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly auth: LocalStrategy) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @ApiOkResponse({ description: 'Ok' })
  @ApiUnauthorizedResponse({ description: 'Identifiants non valides' })
  @Post('auth/login')
  login(@Body() connectUser: ConnectUserDto): Observable<any> {
    return this.auth.validate(connectUser.username, connectUser.password);
  }
}
