import { IsBoolean, IsInstance, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { RefugeAddressDto } from './refuge-address.dto';
import { Type } from 'class-transformer';

export class UpdateRefugeDto {
  @ApiModelProperty({ description: 'Unique identifier in the database', example: '123'})
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiModelProperty({ description: 'Name of the refuge', example: 'Refuge'})
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiModelProperty({ description: 'Address' })
  @IsOptional()
  @IsInstance(RefugeAddressDto)
  @ValidateNested()
  @Type(() => RefugeAddressDto)
  address: RefugeAddressDto;

  @ApiModelProperty({ description: 'Phone', example: '+33600000000', pattern: '/^(\+\d{11})$/' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiModelProperty({ description: 'Email', example: 'MonRefuge@undefined.com' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  email: string;
}
