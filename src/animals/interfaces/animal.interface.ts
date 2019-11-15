import { Document } from 'mongoose';

export interface Animal extends Document {
  id: string;
  name: string;
  photo?: string;
  species: string;
  breed: string;
  diet: string;
  health: string;
  description?: string;
  enterDate: number;
}
