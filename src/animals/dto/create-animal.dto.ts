import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateAnimalDto {
  @ApiModelProperty({ description: 'Name', example: 'Felix'})
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiModelProperty({ description: 'Photo URL', example: 'myphoto'})
  @IsString()
  photo?: string;

  @ApiModelProperty({ description: 'Species', example: 'Feline'})
  @IsNotEmpty()
  @IsString()
  species: string;

  @ApiModelProperty({ description: 'Breed', example: 'Cat'})
  @IsNotEmpty()
  @IsString()
  breed: string;

  @ApiModelProperty({ description: 'Gender', example: 'Male'})
  @IsNotEmpty()
  @IsString()
  gender: string

  @ApiModelProperty({ description: 'diet', example: 'meat'})
  @IsNotEmpty()
  @IsString()
  diet: string;

  @ApiModelProperty({ description: 'Health state', example: 'Healthy'})
  @IsNotEmpty()
  @IsString()
  health: string;

  @ApiModelProperty({ description: 'Description', example: 'Calm & Cute'})
  @IsString()
  description?: string;

  @ApiModelProperty({ description: 'Arrived at ..', example: '2019/12/2'})
  @IsNotEmpty()
  @IsNumber()
  enterDate: number;
}
