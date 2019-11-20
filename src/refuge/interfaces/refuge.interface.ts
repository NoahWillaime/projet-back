import { Document } from 'mongoose';

export interface Refuge extends Document{
  id: string;
  name: string;
  address: Address;
  phone: string;
  email: string;
  userId: string;
  firstname: string;
  lastname: string;
}

export interface Address {
  street: string;
  postalCode: string;
  city: string;
}
