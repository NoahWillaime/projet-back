import { ClassSerializerInterceptor, Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiImplicitParam,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { HandlerParams } from './validators/HandlerParams';
import { BenevoleEntity } from './entities/benevole.entity';
import { BenevolesService } from './benevoles.service';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('benevoles')
export class BenevolesController {
  constructor(private readonly _benevolesService: BenevolesService) {
  }

  @ApiOkResponse({ description: 'Returns an array of benevoles', type: BenevoleEntity})
  @ApiNoContentResponse( { description: 'No benevoles in database '} )
  @Get()
  findAll(): Observable<BenevoleEntity[] | void> {
    return this._benevolesService.findAll();
  }

  @ApiOkResponse({ description: 'Return the benevole corresponding with the given username' })
  @ApiNotFoundResponse( { description: 'No benevole with the given username' } )
  @ApiUnprocessableEntityResponse({ description: 'Failed' })
  @ApiBadRequestResponse({ description: 'bad parameters' })
  @ApiImplicitParam({name: 'username', description: 'username of the benevole', type: String})
  @Get(':username')
  findOne(@Param() params: HandlerParams): Observable<BenevoleEntity> {
    return this._benevolesService.findOne(params.username);
  }
}
