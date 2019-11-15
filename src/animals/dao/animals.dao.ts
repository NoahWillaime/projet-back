import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, MongooseDocument } from 'mongoose';
import { Animal } from '../interfaces/animal.interface';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreateAnimalDto } from '../dto/create-animal.dto';

@Injectable()
export class AnimalsDao {
  constructor(@InjectModel('Animal') private readonly _animalModel: Model<Animal>) {}

  find(): Observable<Animal[] | void> {
    return from(this._animalModel.find({}))
      .pipe(
        map((docs: MongooseDocument[]) => (!!docs && docs.length > 0) ? docs.map(_ => _.toJSON()) : undefined),
      );
  }

  findOne(id: string): Observable<Animal | void> {
    return from(this._animalModel.findById(id))
      .pipe(
        map((doc: MongooseDocument) => (!!doc) ? doc.toJSON() : undefined),
      );
  }

  create(animal: CreateAnimalDto): Observable<Animal> {
    return from(this._animalModel.create(animal))
      .pipe(
        map((doc: MongooseDocument) => doc.toJSON()),
      )
  }
}
