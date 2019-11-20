import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateBenevoleDto {
  @ApiModelProperty({ description: 'Username', example: 'user'})
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiModelProperty({ description: 'Password', example: 'pwd'})
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiModelProperty({ description: 'Firstname of the benevole', example: 'shin'})
  @IsString()
  @IsNotEmpty()
  firstname: string;

  @ApiModelProperty({ description: 'Lastname of the benevole', example: 'Walford'})
  @IsString()
  @IsNotEmpty()
  lastname: string;
}
