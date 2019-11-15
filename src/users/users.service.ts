import { Injectable } from '@nestjs/common';
import { from, Observable, of } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme',
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret',
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess',
      },
    ];
  }

  findOne(username: string): Observable<User | void> {
    return of(this.users.find(user => user.username === username))
      .pipe(
        map(_ => (!!_) ? _ : undefined),
      );
  }
}
