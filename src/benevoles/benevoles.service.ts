import { ConflictException, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { Benevole} from './interfaces/benevole.interface';
import { BENEVOLES} from '../data/benevoles';
import { Observable, of, throwError } from 'rxjs';
import { catchError, flatMap, map } from 'rxjs/operators';
import { BenevoleEntity } from './entities/benevole.entity';
import { BenevolesDao } from './dao/benevoles.dao';
import { CreateBenevoleDto } from './dto/create-benevole.dto';
import { UpdateBenevoleDto } from './dto/update-benevole.dto';

@Injectable()
export class BenevolesService {
  private _benevoles: Benevole[];

  constructor(private readonly _benevolesDao: BenevolesDao) {
    this._benevoles = [].concat(BENEVOLES);
  }

  findAll(): Observable<BenevoleEntity[] | void> {
    return this._benevolesDao.find()
      .pipe(
        map(_ => (!!_) ? _.map(__ => new BenevoleEntity(__)) : undefined),
      );
  }

  findOne(id: string): Observable<BenevoleEntity> {
    return this._benevolesDao.findOne(id)
      .pipe(
        catchError(e => throwError(new UnprocessableEntityException('bdd failed'))),
        flatMap(_ =>
          (!!_) ?
            of(new BenevoleEntity(_)) :
            throwError(new NotFoundException('not here')),
        ),
      );
  }

  findOneUsername(username: string): Observable<BenevoleEntity> {
    return this._benevolesDao.findOneUsername(username)
      .pipe(
        catchError(e => throwError(new UnprocessableEntityException('bdd failed'))),
        flatMap(_ =>
          (!!_) ?
            of(new BenevoleEntity(_)) :
            throwError(new NotFoundException('not here')),
        ),
      );
  }

  create(benevole: CreateBenevoleDto): Observable<BenevoleEntity> {
    return this._benevolesDao.create(benevole)
      .pipe(
        catchError(e =>
          (e.code = 11000) ?
            throwError(new ConflictException('already exist')) :
            throwError(new UnprocessableEntityException('bdd failed')),
        ),
        map(_ => new BenevoleEntity(_)),
      );
  }

  update(id: string, benevole: UpdateBenevoleDto): Observable<BenevoleEntity> {
    return this._benevolesDao.update(id, benevole)
      .pipe(
        catchError(e =>
          (e.code = 11000) ?
            throwError(new ConflictException('already exist')) :
            throwError(new UnprocessableEntityException('bdd failed')),
        ),
        flatMap(_ =>
          (!!_) ?
            of(new BenevoleEntity(_)) :
            throwError(new NotFoundException('pas trouvé')),
        ),
      );
  }

  delete(id: string): Observable<void> {
    return this._benevolesDao.delete(id)
      .pipe(
        catchError(e => throwError(new UnprocessableEntityException('bdd failed'))),
        flatMap(_ =>
          (!!_) ?
            of(undefined) :
            throwError(new NotFoundException('pas trouvé')),
        ),
      );
  }
}
