import { Document } from 'mongoose';

export interface Refuge extends Document{
  id: string;
  name: string;
  address: Address;
  animalsIds: string[];
  phone: string;
  userId: string;
  email: string;
}

export interface Address {
  street: string;
  postalCode: string;
  city: string;
}
