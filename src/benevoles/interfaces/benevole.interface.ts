import { Document } from 'mongoose';

export interface Benevole extends Document {
  username: string;
  password: string;
  idRefuge: string;
}
