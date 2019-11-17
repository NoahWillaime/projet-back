import { IsNotEmpty, IsString } from 'class-validator';

export class HandlerParemsSpecies {
  @IsNotEmpty()
  @IsString()
  species: string;
}
