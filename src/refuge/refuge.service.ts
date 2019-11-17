import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { Observable, of, throwError } from 'rxjs';
import { catchError, flatMap, map } from 'rxjs/operators';
import { RefugesDao } from './dao/refuges.dao';
import { RefugeEntity } from './entities/refuge.entity';

@Injectable()
export class RefugeService {
  constructor(private readonly _refugeDao: RefugesDao) {}

  findAll(): Observable<RefugeEntity[] | void> {
    return this._refugeDao.find()
      .pipe(
        map(_ => (!!_) ? _.map(__ => new RefugeEntity(__)) : undefined),
      );
  }

  findOne(id: string): Observable<RefugeEntity> {
    return this._refugeDao.findOne(id)
      .pipe(
        catchError(e => throwError(new UnprocessableEntityException('bdd failed'))),
        flatMap(_ =>
          (!!_) ?
            of(new RefugeEntity(_)) :
            throwError(new NotFoundException('not here')),
        ),
      );
  }
}
