import { InjectModel } from '@nestjs/mongoose';
import { Model, MongooseDocument } from 'mongoose';
import { Refuge } from '../interfaces/refuge.interface';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


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


}
