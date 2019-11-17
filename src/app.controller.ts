import { Body, Controller, Get, Logger, Param, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBearerAuth, ApiImplicitHeader, ApiOkResponse, ApiUnauthorizedResponse, ApiUseTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { AuthGuard } from '@nestjs/passport';
import { LocalStrategy } from './auth/local.strategy';
import { ConnectUserDto } from './auth/dto/connect-user.dto';

@ApiUseTags('app')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly auth: LocalStrategy, private _log: Logger) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @ApiOkResponse({ description: 'Ok' })
  @ApiUnauthorizedResponse({ description: 'Identifiants non valides' })
  @Post('auth/login')
  login(@Body() connectUser: ConnectUserDto): Observable<any> {
    this._log.log("J'essaye ?", 'LOGIN');
    return this.auth.validate(connectUser.username, connectUser.password);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
