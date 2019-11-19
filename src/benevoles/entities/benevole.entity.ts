import { Exclude, Expose, Type } from 'class-transformer';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

@Exclude()
export class BenevoleEntity {
  @ApiModelProperty({ description: 'Unique identifier in the database', example: '123'})
  @Expose()
  @Type(() => String)
  id: string;

  @ApiModelProperty({ description: 'Unique username in the database', example: 'username'})
  @Expose()
  @Type(() => String)
  username: string;

  @ApiModelProperty({ description: 'Password', example: 'pwd'})
  @Type(() => String)
  password: string;

  @ApiModelProperty({ description: 'Firstname of the benevole' })
  @Expose()
  @Type(() => String)
  firstname: string;

  @ApiModelProperty({ description: 'Lastname of the benevole', example: 'Walford'})
  @Expose()
  @Type(() => String)
  lastname: string;

  constructor(partial: Partial<BenevoleEntity>) {
    Object.assign(this, partial);
  }
}
