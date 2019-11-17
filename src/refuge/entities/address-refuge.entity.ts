import { Exclude, Expose, Type } from 'class-transformer';
import { ApiModelProperty } from '@nestjs/swagger';

@Exclude()
export class AddressEntity {
  @ApiModelProperty({ description: 'Street', example: 'Boulevard Jean Jaures' })
  @Expose()
  street: string;

  @ApiModelProperty({ description: 'Postal code', example: '54000' })
  @Expose()
  postalCode: string;

  @ApiModelProperty({ description: 'City', example: 'Nancy' })
  @Expose()
  city: string;

  constructor(partial: Partial<AddressEntity>) {
    Object.assign(this, partial);
  }
}
