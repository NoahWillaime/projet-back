import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { defaultIfEmpty, filter, map, tap } from 'rxjs/operators';
import { JwtService } from '@nestjs/jwt';
import { BenevolesService } from '../benevoles/benevoles.service';
import { BenevoleEntity } from '../benevoles/entities/benevole.entity';

@Injectable()
export class AuthService {
  constructor(private readonly _benevolesService: BenevolesService, private readonly jwtService: JwtService) {}

  validUser(username: string, pass: string): Observable<BenevoleEntity | void> {
    return this._benevolesService.findOne(username)
      .pipe(
        filter(_ => !!_),
        map((user: BenevoleEntity) =>
          (user.password === pass) ? user : undefined),
        defaultIfEmpty(undefined),
      );
  }

  login(user: BenevoleEntity): Observable<any> {
    const payload = { username: user.username, sub: user.id};
    return of({
      userId: user.id,
      username: user.username,
      refugeId: user.refugeId,
      access_token: this.jwtService.sign(payload)
    });
  }
}
