import { Document } from 'mongoose';

export interface Benevole extends Document {
  id: string;
  username: string;
  firstname: string;
  lastname: string;
  password: string;
}
