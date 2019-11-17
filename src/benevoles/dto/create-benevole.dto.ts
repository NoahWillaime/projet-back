import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateBenevoleDto {
  @ApiModelProperty({ description: 'Unique identifier in the database', example: 'username'})
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiModelProperty({ description: 'Password', example: 'pwd'})
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiModelProperty({ description: 'Unique identifier in the database', example: '123'})
  @IsString()
  @IsNotEmpty()
  idRefuge: string;
}
