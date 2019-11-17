import { Document } from 'mongoose';

export interface Benevole extends Document {
  id: string;
  username: string;
  password: string;
  refugeName: string;
  refugeId: string;
}
