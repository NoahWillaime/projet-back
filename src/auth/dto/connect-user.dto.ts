import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ConnectUserDto {
  @ApiModelProperty({description: 'Username', example: 'Mustang'})
  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @ApiModelProperty({description: 'Password', example: 'azerty1'})
  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
