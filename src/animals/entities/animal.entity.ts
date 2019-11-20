import { Exclude, Expose, Type } from 'class-transformer';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

@Exclude()
export class AnimalEntity {
  @ApiModelProperty({ description: 'Unique identifier in the database', example: '123'})
  @Expose()
  @Type(() => String)
  id: string;
  @ApiModelProperty({ description: 'Animal\'s name', example: 'Felix'})
  @Expose()
  @Type(() => String)
  name: string;
  @ApiModelProperty({ description: 'Animal\'s species', example: 'cat'})
  @Expose()
  @Type(() => String)
  species: string;
  @ApiModelProperty({ description: 'Animal\'s breed', example: 'bengal'})
  @Expose()
  @Type(() => String)
  breed: string;
  @ApiModelProperty({ description: 'Animal\'s gender', example: 'Male'})
  @Expose()
  @Type(() => String)
  gender: string
  @ApiModelProperty({ description: 'Photo URL', example: 'myphoto'})
  @Expose()
  @Type(() => String)
  photo: string;
  @ApiModelProperty({ description: 'Animal\'s diet', example: 'meat'})
  @Expose()
  @Type(() => String)
  diet: string;
  @ApiModelProperty({ description: 'Animal\'s health state', example: 'Healthy'})
  @Expose()
  @Type(() => String)
  health: string;
  @ApiModelProperty({ description: 'Animal\'s description', example: 'Calm & Cute'})
  @Expose()
  @Type(() => String)
  description: string;
  @ApiModelProperty({ description: 'Animal\'s arrival', example: '2019/12/2'})
  @Expose()
  @Type(() => Number)
  enterDate: number;
  @ApiModelProperty({ description: 'Refuge\'s unique identifier in the database for the animal', example: '123'})
  @Expose()
  @Type(() => String)
  refugeId: string;
  constructor(partial: Partial<AnimalEntity>) {
    Object.assign(this, partial);
  }
}
