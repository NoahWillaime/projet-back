import { IsNotEmpty, IsString } from 'class-validator';

export class HandlerParams {
  @IsNotEmpty()
  @IsString()
  username: string;
}
