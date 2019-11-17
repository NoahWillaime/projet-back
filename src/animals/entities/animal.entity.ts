import { Exclude, Expose, Type } from 'class-transformer';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

@Exclude()
export class AnimalEntity {
  @ApiModelProperty({ description: 'Unique identifier in the database', example: '123'})
  @Expose()
  @Type(() => String)
  id: string;
  @ApiModelProperty({ description: 'Name', example: 'Felix'})
  @Expose()
  @Type(() => String)
  name: string;
  @ApiModelProperty({ description: 'Species', example: 'Feline'})
  @Expose()
  @Type(() => String)
  species: string;
  @ApiModelProperty({ description: 'Breed', example: 'Cat'})
  @Expose()
  @Type(() => String)
  breed: string;
  @ApiModelProperty({ description: 'Gender', example: 'Male'})
  @Expose()
  @Type(() => String)
  gender: string
  @ApiModelProperty({ description: 'Photo URL', example: 'myphoto'})
  @Expose()
  @Type(() => String)
  photo: string;
  @ApiModelProperty({ description: 'diet', example: 'meat'})
  @Expose()
  @Type(() => String)
  diet: string;
  @ApiModelProperty({ description: 'Health state', example: 'Healthy'})
  @Expose()
  @Type(() => String)
  health: string;
  @ApiModelProperty({ description: 'Description', example: 'Calm & Cute'})
  @Expose()
  @Type(() => String)
  description: string;
  @ApiModelProperty({ description: 'Arrived at ..', example: '2019/12/2'})
  @Expose()
  @Type(() => Number)
  enterDate: number;
  @ApiModelProperty({ description: 'Unique identifier in the database', example: '123'})
  @Expose()
  @Type(() => String)
  refugeId: string;
  constructor(partial: Partial<AnimalEntity>) {
    Object.assign(this, partial);
  }
}
