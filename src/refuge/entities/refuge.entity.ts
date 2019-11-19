import { Exclude, Expose, Type } from 'class-transformer';
import { ApiModelProperty } from '@nestjs/swagger';
import { AddressEntity } from './address-refuge.entity';

@Exclude()
export class RefugeEntity {
  @ApiModelProperty({ description: 'Unique identifier in the database', example: '123'})
  @Expose()
  @Type(() => String)
  id: string;

  @ApiModelProperty({ description: 'Name', example: 'Felix'})
  @Expose()
  @Type(() => String)
  name: string;

  @ApiModelProperty({ description: 'Email', example: 'MonRefuge@undefined.com' })
  @Expose()
  @Type(() => String)
  email: string;

  @ApiModelProperty({ description: 'Phone', example: '+33600000000', pattern: '/^(\+\d{11})$/' })
  @Expose()
  @Type(() => String)
  phone: string;

  @ApiModelProperty({ description: 'Address' })
  @Expose()
  @Type(() => AddressEntity)
  address: AddressEntity;

  constructor(partial: Partial<RefugeEntity>) {
    Object.assign(this, partial);
  }
}
