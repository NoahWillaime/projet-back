import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Observable, of, throwError } from 'rxjs';
import { filter, flatMap, tap } from 'rxjs/operators';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  validate(username: string, password: string): Observable<any> {
    return this.authService.validUser(username, password)
      .pipe(
        flatMap(_ => (!_) ?
          throwError(new UnauthorizedException('Identifiants inconrects')) :
          this.authService.login(_)),
      );
  }
}
