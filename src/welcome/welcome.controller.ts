import { Controller, Get } from '@nestjs/common';
import { WelcomeService } from './welcome.service';
import { Observable } from 'rxjs';
import { ApiImplicitHeader } from '@nestjs/swagger';

@Controller()
export class WelcomeController {
  constructor(private readonly _welcomeService: WelcomeService) {}

  @Get()
  welcomeMessage(): Observable<string> {
    return this._welcomeService.welcomeMessage();
  }
}
