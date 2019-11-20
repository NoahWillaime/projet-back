import { Body, ClassSerializerInterceptor, Controller, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import {
  ApiBadRequestResponse, ApiBearerAuth, ApiConflictResponse, ApiCreatedResponse,
  ApiImplicitParam,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiUnprocessableEntityResponse, ApiUseTags,
} from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { RefugeEntity } from './entities/refuge.entity';
import { RefugeService } from './refuge.service';
import { RefugeInterceptor } from './interceptors/refuges.interceptor';
import { HandlerParamsPostalCode } from './validators/HandlerParamsPostalCode';
import { AnimalEntity } from '../animals/entities/animal.entity';
import { CreateRefugeDto } from './dto/create-refuge.dto';
import { HandlerParamsUserId } from './validators/HandlerParamsUserId';
import { HandlerParams } from './validators/HandlerParams';

@ApiUseTags('refuge')
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

  @ApiOkResponse({ description: 'Return an array of refuge filtered by specified postalcode', type: RefugeEntity})
  @ApiNoContentResponse({ description: 'No refuge with specified postalCode' })
  @ApiImplicitParam({name: 'postalCode', description: 'PostalCode of the refuges', type: String})
  @Get('/postalCode/:postalCode')
  findAllByPostalCode(@Param() params: HandlerParamsPostalCode): Observable<RefugeEntity[] | void> {
    return this._refugeService.findAllByPostalCode(params.postalCode);
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

  @ApiOkResponse({ description: 'Return the refuge corresponding with the given id' })
  @ApiNotFoundResponse( { description: 'No refuge with the given owner id' } )
  @ApiUnprocessableEntityResponse({ description: 'Failed' })
  @ApiBadRequestResponse({ description: 'bad parameters' })
  @ApiImplicitParam({name: 'id', description: 'ID of the refuge owner', type: String})
  @Get('user/:id')
  findOneByUser(@Param() params: HandlerParams): Observable<RefugeEntity> {
    return this._refugeService.findOneByUser(params.id);
  }

  @ApiOkResponse({ description: 'Returns an array of animals', type: RefugeEntity})
  @ApiNoContentResponse( { description: 'No animal in this refuge in database '} )
  @ApiBadRequestResponse({ description: 'bad parameters' })
  @ApiImplicitParam({name: 'id', description: 'ID of the refuge', type: String})
  @Get('/:id/animals')
  findAnimals(@Param() params: HandlerParams): Observable<AnimalEntity[] | void> {
    return this._refugeService.findAnimals(params.id);
  }

  @ApiCreatedResponse({ description: 'success !'})
  @ApiConflictResponse({ description: 'already here' })
  @ApiBadRequestResponse({ description: ':(' })
  @ApiUnprocessableEntityResponse({ description: 'Request failed' })
  @ApiBearerAuth()
  @Post()
  create(@Body() createRefugeDto: CreateRefugeDto): Observable<RefugeEntity> {
    return this._refugeService.create(createRefugeDto);
  }
}
