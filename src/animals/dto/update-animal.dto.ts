import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class UpdateAnimalDto {
  @ApiModelProperty({ description: 'Name', example: 'Felix'})
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;

  @ApiModelProperty({ description: 'Photo URL', example: 'myphoto'})
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  photo?: string;

  @ApiModelProperty({ description: 'Species', example: 'Feline'})
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  species?: string;

  @ApiModelProperty({ description: 'Breed', example: 'Cat'})
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  breed?: string;

  @ApiModelProperty({ description: 'Gender', example: 'Male'})
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  gender: string

  @ApiModelProperty({ description: 'diet', example: 'meat'})
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  diet?: string;

  @ApiModelProperty({ description: 'Health state', example: 'Healthy'})
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  health?: string;

  @ApiModelProperty({ description: 'Description', example: 'Calm & Cute'})
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description?: string;

  @ApiModelProperty({ description: 'Arrived at ..', example: '2019/12/2'})
  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  enterDate?: number;
}
