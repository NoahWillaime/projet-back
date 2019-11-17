import { Exclude, Expose, Type } from 'class-transformer';
import { ApiModelProperty } from '@nestjs/swagger';

@Exclude()
export class BenevoleEntity {
  @ApiModelProperty({ description: 'Unique identifier in the database', example: '123'})
  @Expose()
  @Type(() => String)
  id: string;

  @ApiModelProperty({ description: 'Unique identifier in the database', example: 'username'})
  @Expose()
  @Type(() => String)
  username: string;

  @ApiModelProperty({ description: 'Password', example: 'pwd'})
  @Type(() => String)
  password: string;

  @ApiModelProperty({ description: 'Refuge of the benevole' })
  @Expose()
  @Type(() => String)
  refugeName: string;

  @ApiModelProperty({ description: 'Unique identifier in the database', example: '123'})
  @Expose()
  @Type(() => String)
  refugeId: string;

  constructor(partial: Partial<BenevoleEntity>) {
    Object.assign(this, partial);
  }
}
