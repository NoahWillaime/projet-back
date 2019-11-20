import { ConflictException, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { Observable, of, throwError } from 'rxjs';
import { catchError, flatMap, map } from 'rxjs/operators';
import { RefugesDao } from './dao/refuges.dao';
import { RefugeEntity } from './entities/refuge.entity';
import { AnimalEntity } from '../animals/entities/animal.entity';
import { AnimalsService } from '../animals/animals.service';
import { CreateRefugeDto } from './dto/create-refuge.dto';
import { UpdateRefugeDto } from './dto/update-refuge.dto';
import { BenevolesService } from '../benevoles/benevoles.service';

@Injectable()
export class RefugeService {
  constructor(private readonly _refugeDao: RefugesDao,
              private readonly _animalsService: AnimalsService,
              private readonly _benevolesService: BenevolesService) {}

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
          refuges.filter((refuges: RefugeEntity) => refuges.address.postalCode.toString().substring(0,2) == postalcode.substr(0,2))),
        flatMap(_ =>
          (!!_ && _.length > 0) ?
            of(_) :
            throwError(new NotFoundException('There is no Refuge with specified postalcode'))
        ),
      );
  }

  findOneByUser(id: string): Observable<RefugeEntity> {
    return this._refugeDao.findOneByUser(id)
      .pipe(
        catchError(e => throwError(new UnprocessableEntityException('Request to database has failed'))),
        flatMap(_ =>
          (!!_) ?
            of(new RefugeEntity(_)) :
            throwError(new NotFoundException('There is no Refuge with specified userid')),
        ),
      );
  }

  findOne(id: string): Observable<RefugeEntity> {
    return this._refugeDao.findOne(id)
      .pipe(
        catchError(e => throwError(new UnprocessableEntityException('Request to database has failed'))),
        flatMap(_ =>
          (!!_) ?
            of(new RefugeEntity(_)) :
            throwError(new NotFoundException('There is no Refuge with the specified id')),
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
            throwError(new NotFoundException('There is no animal with the specified species'))
        ),
      );
  }

  create(refuge: CreateRefugeDto): Observable<RefugeEntity> {
    return this._refugeDao.create(refuge)
      .pipe(
        catchError(e =>
          (e.code = 11000) ?
            throwError(new ConflictException('Refuge already in database')) :
            throwError(new UnprocessableEntityException('Request to database has failed')),
        ),
        map(_ => new RefugeEntity(_))
      );
  }

  update(id: string, refuge: UpdateRefugeDto): Observable<RefugeEntity> {
    return this._refugeDao.update(id, refuge)
      .pipe(
        catchError(e =>
          (e.code = 11000) ?
            throwError(new ConflictException('Refuge already in database')) :
            throwError(new UnprocessableEntityException('Request to database has failed')),
        ),
        flatMap(_ =>
          (!!_) ?
            of(new RefugeEntity(_)) :
            throwError(new NotFoundException('There is no refuge with the specified id')),
        ),
      )
  }

  delete(id: string): Observable<void> {
    return this._refugeDao.delete(id)
      .pipe(
        catchError(e => throwError(new UnprocessableEntityException('Request to database has failed'))),
        flatMap(_ =>
          (!!_) ?
            of(undefined) :
            throwError(new NotFoundException('There is no refuge with the specified id')),
        )
      );
  }

}
