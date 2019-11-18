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
import { HandlerParams } from '../animals/validators/HandlerParams';
import { RefugeEntity } from './entities/refuge.entity';
import { RefugeService } from './refuge.service';
import { RefugeInterceptor } from './interceptors/refuges.interceptor';
import { AnimalEntity } from '../animals/entities/animal.entity';

@UseInterceptors(ClassSerializerInterceptor)
@UseInterceptors(RefugeInterceptor)
@Controller('refuge')
export class RefugeController {
  constructor(private readonly _refugeService: RefugeService) {}

  @ApiOkResponse({ description: 'Returns an array of refuges', type: RefugeEntity})
  @ApiNoContentResponse( { description: 'No refuge in database '} )
  @Get()
  findAll(): Observable<RefugeEntity[] | void> {
    return this._refugeService.findAll();
  }

  @ApiOkResponse({ description: 'Return the refuge corresponding with the given id' })
  @ApiNotFoundResponse( { description: 'No refuge with the given id' } )
  @ApiUnprocessableEntityResponse({ description: 'Failed' })
  @ApiBadRequestResponse({ description: 'bad parameters' })
  @ApiImplicitParam({name: 'id', description: 'ID of the refuge', type: String})
  @Get(':id')
  findOne(@Param() params: HandlerParams): Observable<RefugeEntity> {
    return this._refugeService.findOne(params.id);
  }

  @ApiOkResponse({ description: 'Returns an array of animals', type: RefugeEntity})
  @ApiNoContentResponse( { description: 'No animal in this refuge in database '} )
  @ApiBadRequestResponse({ description: 'bad parameters' })
  @ApiImplicitParam({name: 'id', description: 'ID of the refuge', type: String})
  @Get('/:id/animals')
  findAnimals(@Param() params: HandlerParams): Observable<AnimalEntity[] | void> {
    return this._refugeService.findAnimals(params.id);
  }
}
