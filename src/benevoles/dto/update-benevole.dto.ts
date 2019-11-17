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

  @ApiModelProperty({ description: 'Refuge of the benevole' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  refugeName: string;

  @ApiModelProperty({ description: 'Unique identifier in the database', example: '123'})
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  refugeId: string;
}
