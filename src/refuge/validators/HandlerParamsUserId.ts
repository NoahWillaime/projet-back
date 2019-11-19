import { IsNotEmpty, IsString } from 'class-validator';

export class HandlerParamsUserId {
  @IsNotEmpty()
  @IsString()
  userId: string;
}
