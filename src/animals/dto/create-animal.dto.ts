import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAnimalDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  photo?: string;

  @IsNotEmpty()
  @IsString()
  species: string;

  @IsNotEmpty()
  @IsString()

  @IsNotEmpty()
  @IsString()
  breed: string;

  @IsNotEmpty()
  @IsString()
  diet: string;

  @IsNotEmpty()
  @IsString()
  health: string;

  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsNumber()
  enterDate: number;
}
