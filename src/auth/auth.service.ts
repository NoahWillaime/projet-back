import { Injectable } from '@nestjs/common';
import { User, UsersService } from '../users/users.service';
import { Observable, of } from 'rxjs';
import { defaultIfEmpty, filter, map, tap } from 'rxjs/operators';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService, private readonly jwtService: JwtService) {}

  validUser(username: string, pass: string): Observable<any> {
    return this.userService.findOne(username)
      .pipe(
        filter(_ => !!_),
        map((user: User) =>
          (user.password === pass) ? (({password, ...data}) => ({...data}))(user) : undefined),
        defaultIfEmpty(undefined),
      );
  }

  login(user: any): Observable<any> {
    const payload = { username: user.username, sub: user.userId };
    return of({access_token: this.jwtService.sign(payload) });
  }
}
