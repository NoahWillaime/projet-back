import { IsMongoId, IsNotEmpty} from 'class-validator';

export class HandlerParams {
  @IsNotEmpty()
  @IsMongoId()
  id: string;
}
