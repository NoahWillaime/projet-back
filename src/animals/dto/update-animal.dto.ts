import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class UpdateAnimalDto {
  @ApiModelProperty({ description: 'Animal\'s name', example: 'Felix'})
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;

  @ApiModelProperty({ description: 'Photo URL', example: 'myphoto'})
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  photo?: string;

  @ApiModelProperty({ description: 'Animal\'s species', example: 'cat'})
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  species?: string;

  @ApiModelProperty({ description: 'Animal\'s breed', example: 'bengal'})
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  breed?: string;

  @ApiModelProperty({ description: 'Animal\'s gender', example: 'Male'})
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  gender: string

  @ApiModelProperty({ description: 'Animal\'s diet', example: 'meat'})
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  diet?: string;

  @ApiModelProperty({ description: 'Animal\'s health state', example: 'Healthy'})
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  health?: string;

  @ApiModelProperty({ description: 'Animal\'s description', example: 'Calm & Cute'})
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description?: string;

  @ApiModelProperty({ description: 'Animal\'s arrival', example: '2019/12/2'})
  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  enterDate?: number;

  @ApiModelProperty({ description: 'Refuge\'s unique identifier in the database for the animal', example: '123'})
  @IsOptional()
  @IsString()
  refugeId: string;
}
