import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class UpdateBenevoleDto {
  @ApiModelProperty({ description: 'Unique identifier in the database', example: 'username'})
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiModelProperty({ description: 'Password', example: 'pwd'})
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiModelProperty({ description: 'Firstname of the benevole' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  firstname: string;

  @ApiModelProperty({ description: 'Lastname of the benevole', example: 'Walford'})
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  lastname: string;
}
