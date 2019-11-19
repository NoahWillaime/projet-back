import { InjectModel } from '@nestjs/mongoose';
import { Model, MongooseDocument } from 'mongoose';
import { Refuge } from '../interfaces/refuge.interface';
import { from, Observable, of, throwError } from 'rxjs';
import { filter, flatMap, map } from 'rxjs/operators';
import { CreateBenevoleDto } from '../../benevoles/dto/create-benevole.dto';
import { Benevole } from '../../benevoles/interfaces/benevole.interface';
import { UpdateBenevoleDto } from '../../benevoles/dto/update-benevole.dto';
import { CreateRefugeDto } from '../dto/create-refuge.dto';
import { UpdateRefugeDto } from '../dto/update-refuge.dto';


export class RefugesDao {
  constructor(@InjectModel('Refuge') private readonly _refugeModel: Model<Refuge>) {
  }

  find(): Observable<Refuge[] | void> {
    return from(this._refugeModel.find({}))
      .pipe(
        map((docs: MongooseDocument[]) => (!!docs && docs.length > 0) ? docs.map(_ => _.toJSON()) : undefined),
      );
  }

  findOne(id: string): Observable<Refuge | void> {
    return from(this._refugeModel.findById(id))
      .pipe(
        map((doc: MongooseDocument) => (!!doc) ? doc.toJSON() : undefined),
      );
  }

  create(refuge: CreateRefugeDto): Observable<Benevole> {
    return from(this._refugeModel.create(refuge))
      .pipe(
        map((doc: MongooseDocument) => doc.toJSON()),
      );
  }

  update(id: string, refuge: UpdateRefugeDto): Observable<Benevole> {
    return from(this._refugeModel.findByIdAndUpdate(id, refuge, { new: true }))
      .pipe(
        map((doc: MongooseDocument) => (!!doc) ? doc.toJSON() : undefined),
      );
  }

  delete(id: string): Observable<any> {
    return from(this._refugeModel.findByIdAndDelete(id))
      .pipe(
        map((doc: MongooseDocument) => (!!doc) ? doc.toJSON() : undefined),
      );
  }

}
