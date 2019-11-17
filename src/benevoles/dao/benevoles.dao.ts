import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, MongooseDocument } from 'mongoose';
import { Benevole} from '../interfaces/benevole.interface';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreateBenevoleDto} from '../dto/create-benevole.dto';
import { UpdateBenevoleDto} from '../dto/update-benevole.dto';

@Injectable()
export class BenevolesDao {
  constructor(@InjectModel('Benevole') private readonly _benevoleModel: Model<Benevole>) {}

  find(): Observable<Benevole[] | void> {
    return from(this._benevoleModel.find({}))
      .pipe(
        map((docs: MongooseDocument[]) => (!!docs && docs.length > 0) ? docs.map(_ => _.toJSON()) : undefined),
      );
  }

  findOne(username: string): Observable<Benevole | void> {
    return from(this._benevoleModel.findById(username))
      .pipe(
        map((doc: MongooseDocument) => (!!doc) ? doc.toJSON() : undefined),
      );
  }

  create(animal: CreateBenevoleDto): Observable<Benevole> {
    return from(this._benevoleModel.create(animal))
      .pipe(
        map((doc: MongooseDocument) => doc.toJSON()),
      );
  }

  update(username: string, animal: UpdateBenevoleDto): Observable<Benevole> {
    return from(this._benevoleModel.findByIdAndUpdate(username, animal, { new: true }))
      .pipe(
        map((doc: MongooseDocument) => (!!doc) ? doc.toJSON() : undefined),
      );
  }

  delete(username: string): Observable<any> {
    return from(this._benevoleModel.findByIdAndDelete(username))
      .pipe(
        map((doc: MongooseDocument) => (!!doc) ? doc.toJSON() : undefined),
      );
  }
}
