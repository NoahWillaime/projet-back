import { Injectable, Logger, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { Observable, of, throwError } from 'rxjs';
import { catchError, defaultIfEmpty, filter, flatMap, map } from 'rxjs/operators';
import { RefugesDao } from './dao/refuges.dao';
import { RefugeEntity } from './entities/refuge.entity';
import { AnimalEntity } from '../animals/entities/animal.entity';
import { AnimalsService } from '../animals/animals.service';

@Injectable()
export class RefugeService {
  constructor(private readonly _refugeDao: RefugesDao, private readonly _animalsService: AnimalsService, private readonly _logger: Logger) {}

  findAll(): Observable<RefugeEntity[] | void> {
    return this._refugeDao.find()
      .pipe(
        map(_ => (!!_) ? _.map(__ => new RefugeEntity(__)) : undefined),
      );
  }

  findAllByPostalCode(postalcode: string): Observable<RefugeEntity[] | void> {
    return this.findAll()
      .pipe(
        map((refuges: RefugeEntity[]) =>
          refuges.filter((refuges: RefugeEntity) => refuges.address.postalCode.toLowerCase() === postalcode.toLowerCase())),
        flatMap(_ =>
          (!!_ && _.length > 0) ?
            of(_) :
            throwError(new NotFoundException('No animal with specified species here'))
        ),
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

  findAnimals(id: string): Observable<AnimalEntity[] | void> {
    return this._animalsService.findAll()
      .pipe(
        map((animals: AnimalEntity[]) => animals.filter((animal: AnimalEntity) => animal.refugeId==id)),
        flatMap(_ =>
          (!!_ && _.length > 0) ?
            of(_) :
            throwError(new NotFoundException('No animal with specified species here'))
        ),
      );
  }
}
