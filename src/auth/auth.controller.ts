import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiUnauthorizedResponse, ApiUseTags } from '@nestjs/swagger';
import { ConnectUserDto } from './dto/connect-user.dto';
import { Observable } from 'rxjs';
import { AuthGuard } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';

@ApiUseTags('authentification')
@Controller('auth')
export class AuthController {
  constructor(private readonly auth: LocalStrategy) {}

  @ApiOkResponse({ description: 'Ok' })
  @ApiUnauthorizedResponse({ description: 'Identifiants invalides' })
  @Post('login')
  login(@Body() connectUser: ConnectUserDto): Observable<any> {
    return this.auth.validate(connectUser.username, connectUser.password);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
