import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class CreateAnimalDto {
  @ApiModelProperty({ description: 'Animal\'s name', example: 'Felix'})
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiModelProperty({ description: 'Photo URL', example: 'myphoto'})
  @IsString()
  photo?: string;

  @ApiModelProperty({ description: 'Animal\'s species', example: 'cat'})
  @IsNotEmpty()
  @IsString()
  species: string;

  @ApiModelProperty({ description: 'Animal\'s breed', example: 'bengal'})
  @IsNotEmpty()
  @IsString()
  breed: string;

  @ApiModelProperty({ description: 'Animal\'s gender', example: 'Male'})
  @IsNotEmpty()
  @IsString()
  gender: string

  @ApiModelProperty({ description: 'Animal\'s diet', example: 'meat'})
  @IsNotEmpty()
  @IsString()
  diet: string;

  @ApiModelProperty({ description: 'Animal\'s health state', example: 'Healthy'})
  @IsNotEmpty()
  @IsString()
  health: string;

  @ApiModelProperty({ description: 'Animal\'s description', example: 'Calm & Cute'})
  @IsString()
  description?: string;

  @ApiModelProperty({ description: 'Animal\'s arrival', example: '2019/12/2'})
  @IsNotEmpty()
  @IsNumber()
  enterDate: number;

  @ApiModelProperty({ description: 'Refuge\'s unique identifier in the database for the animal', example: '123'})
  @IsNotEmpty()
  @IsString()
  refugeId: string;
}
