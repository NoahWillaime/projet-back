import { Injectable, NotFoundException } from '@nestjs/common';
import { Animal } from './interfaces/animal.interface';
import { ANIMALS } from '../data/animals';
import { from, Observable, of, throwError } from 'rxjs';
import { find, flatMap, map } from 'rxjs/operators';

@Injectable()
export class AnimalsService {
  private _animals: Animal[];

  constructor() {
    this._animals = [].concat(ANIMALS);
  }

  findAll(): Observable<Animal[] | void> {
    return of(this._animals)
      .pipe(
        map(_ => (!!_) ? _ : undefined),
      );
  }

  findOne(id: string): Observable<Animal> {
    return from(this._animals)
      .pipe(
        find(_ => _.id === id),
        flatMap(_ =>
          (!!_) ?
            of(_) :
            throwError(new NotFoundException('not here')),
        ),
      );
  }
}
