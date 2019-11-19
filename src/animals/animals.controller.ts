import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Animal } from './interfaces/animal.interface';
import { AnimalsService } from './animals.service';
import {
  ApiBadRequestResponse, ApiBearerAuth, ApiConflictResponse, ApiCreatedResponse,
  ApiImplicitParam,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { HandlerParams } from './validators/HandlerParams';
import { AnimalEntity } from './entities/animal.entity';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { AnimalsInterceptor } from './interceptors/animals.interceptor';
import { HandlerParemsSpecies } from './validators/HandlerParemsSpecies';

@UseInterceptors(ClassSerializerInterceptor)
@UseInterceptors(AnimalsInterceptor)
@Controller('animals')
export class AnimalsController {

  constructor(private readonly _animalService: AnimalsService) {}

  @ApiOkResponse({ description: 'Return an array of breeds name', type: String})
  @ApiNoContentResponse({ description: 'No breeds in database' })
  @Get('/species')
  findAllSpecies(): Observable<string[] | void> {
    return this._animalService.findAllSpecies();
  }

  @ApiOkResponse({ description: 'Return an array oof animal filtered by specified species', type: AnimalEntity})
  @ApiNoContentResponse({ description: 'No animal with specified species' })
  @ApiImplicitParam({name: 'species', description: 'Species of the animals', type: String})
  @Get('/species/:species')
  findAllBySpecies(@Param() params: HandlerParemsSpecies): Observable<AnimalEntity[] | void> {
    return this._animalService.findAllBySpecies(params.species);
  }

  @ApiOkResponse({ description: 'Returns an array of animal', type: AnimalEntity})
  @ApiNoContentResponse( { description: 'No animal in database '} )
  @Get()
  findAll(): Observable<AnimalEntity[] | void> {
    return this._animalService.findAll();
  }
  
  @ApiOkResponse({ description: 'Return the animal corresponding with the given id' })
  @ApiNotFoundResponse( { description: 'No animal with the given id' } )
  @ApiUnprocessableEntityResponse({ description: 'Failed' })
  @ApiBadRequestResponse({ description: 'bad parameters' })
  @ApiImplicitParam({name: 'id', description: 'ID of the animal', type: String})
  @Get(':id')
  findOne(@Param() params: HandlerParams): Observable<AnimalEntity> {
    return this._animalService.findOne(params.id);
  }

  @ApiCreatedResponse({ description: 'success !'})
  @ApiConflictResponse({ description: 'already here' })
  @ApiBadRequestResponse({ description: ':(' })
  @ApiUnprocessableEntityResponse({ description: 'Request failed' })
  @ApiBearerAuth()
  @Post()
  create(@Body() createAnimalDTO: CreateAnimalDto): Observable<AnimalEntity> {
    return this._animalService.create(createAnimalDTO);
  }

  @ApiOkResponse({ description: 'Return the animal updated' })
  @ApiNotFoundResponse( { description: 'No animal with the given id' } )
  @ApiUnprocessableEntityResponse({ description: 'Failed' })
  @ApiBadRequestResponse({ description: 'bad parameters' })
  @ApiImplicitParam({name: 'id', description: 'ID of the animal', type: String})
  @ApiBearerAuth()
  @Put(':id')
  update(@Param() params: HandlerParams, @Body() updateAnimalDTO: UpdateAnimalDto): Observable<AnimalEntity> {
    return this._animalService.update(params.id, updateAnimalDTO);
  }

  @ApiNoContentResponse({ description: 'Delete OK' })
  @ApiNotFoundResponse( { description: 'No animal with the given id' } )
  @ApiUnprocessableEntityResponse({ description: 'Failed' })
  @ApiBadRequestResponse({ description: 'bad parameters' })
  @ApiImplicitParam({name: 'id', description: 'ID of the animal', type: String})
  @ApiBearerAuth()
  @Delete(':id')
  delete(@Param() params: HandlerParams): Observable<void> {
    return this._animalService.delete(params.id);
  }
}
