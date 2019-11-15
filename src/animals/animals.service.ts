import { ConflictException, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { Animal } from './interfaces/animal.interface';
import { ANIMALS } from '../data/animals';
import { from, Observable, of, throwError } from 'rxjs';
import { catchError, find, flatMap, map } from 'rxjs/operators';
import { AnimalEntity } from './entities/animal.entity';
import { AnimalsDao } from './dao/animals.dao';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';

@Injectable()
export class AnimalsService {
  private _animals: Animal[];

  constructor(private readonly _animalsDao: AnimalsDao) {
    this._animals = [].concat(ANIMALS);
  }

  findAll(): Observable<AnimalEntity[] | void> {
    return this._animalsDao.find()
      .pipe(
        map(_ => (!!_) ? _.map(__ => new AnimalEntity(__)) : undefined),
      );
  }

  findOne(id: string): Observable<AnimalEntity> {
    return this._animalsDao.findOne(id)
      .pipe(
        catchError(e => throwError(new UnprocessableEntityException('bdd failed'))),
        flatMap(_ =>
          (!!_) ?
            of(new AnimalEntity(_)) :
            throwError(new NotFoundException('not here')),
        ),
      );
  }

  create(animal: CreateAnimalDto): Observable<AnimalEntity> {
    return this._animalsDao.create(animal)
      .pipe(
        catchError(e =>
          (e.code = 11000) ?
            throwError(new ConflictException('already exist')) :
            throwError(new UnprocessableEntityException('bdd failed')),
        ),
        map(_ => new AnimalEntity(_)),
      );
  }

  update(id: string, animal: UpdateAnimalDto): Observable<AnimalEntity> {
    return this._animalsDao.update(id, animal)
      .pipe(
        catchError(e =>
          (e.code = 11000) ?
            throwError(new ConflictException('already exist')) :
            throwError(new UnprocessableEntityException('bdd failed')),
        ),
        flatMap(_ =>
          (!!_) ?
            of(new AnimalEntity(_)) :
            throwError(new NotFoundException('pas trouvé')),
        ),
      )
  }

  delete(id: string): Observable<void> {
    return this._animalsDao.delete(id)
      .pipe(
        catchError(e => throwError(new UnprocessableEntityException('bdd failed'))),
        flatMap(_ =>
          (!!_) ?
            of(undefined) :
            throwError(new NotFoundException('pas trouvé')),
        )
      );
  }
}
