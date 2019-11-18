import { IsNotEmpty, IsString } from 'class-validator';

export class HandlerParamsPostalCode {
  @IsNotEmpty()
  @IsString()
  postalCode: string;
}
