import { Body, ClassSerializerInterceptor, Controller, Get, Logger, Param, Post, UseInterceptors } from '@nestjs/common';
import {
  ApiBadRequestResponse, ApiBearerAuth, ApiConflictResponse, ApiCreatedResponse,
  ApiImplicitParam,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiUnprocessableEntityResponse, ApiUseTags,
} from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { HandlerParams } from './validators/HandlerParams';
import { BenevoleEntity } from './entities/benevole.entity';
import { BenevolesService } from './benevoles.service';
import { CreateBenevoleDto } from './dto/create-benevole.dto';

@ApiUseTags('benevoles')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('benevoles')
export class BenevolesController {
  constructor(private readonly _benevolesService: BenevolesService, private _logger: Logger) {
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
  @ApiImplicitParam({name: 'id', description: 'ID of the benevole', type: String})
  @Get(':id')
  findOne(@Param() params: HandlerParams): Observable<BenevoleEntity> {
    return this._benevolesService.findOne(params.id);
  }

  @ApiCreatedResponse({ description: 'success !'})
  @ApiConflictResponse({ description: 'already here' })
  @ApiBadRequestResponse({ description: ':(' })
  @ApiUnprocessableEntityResponse({ description: 'Request failed' })
  @Post()
  create(@Body() createBenevoleDto: CreateBenevoleDto): Observable<BenevoleEntity> {
    return this._benevolesService.create(createBenevoleDto);
  }
}
