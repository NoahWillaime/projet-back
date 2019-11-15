import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Animal } from './interfaces/animal.interface';
import { AnimalsService } from './animals.service';
import {
  ApiBadRequestResponse, ApiConflictResponse, ApiCreatedResponse,
  ApiImplicitParam,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiUnauthorizedResponse,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { HandlerParams } from './validators/HandlerParams';
import { AnimalEntity } from './entities/animal.entity';
import { CreateAnimalDto } from './dto/create-animal.dto';

@Controller('animals')
export class AnimalsController {

  constructor(private readonly _animalService: AnimalsService) {}

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
  findOne(@Param() params: HandlerParams): Observable<Animal> {
    return this._animalService.findOne(params.id);
  }

  @ApiCreatedResponse({ description: 'success !'})
  @ApiConflictResponse({ description: 'already here' })
  @ApiBadRequestResponse({ description: ':(' })
  @ApiUnprocessableEntityResponse({ description: 'Request failed' })
  @Post()
  create(@Body() createAnimalDTO: CreateAnimalDto): Observable<AnimalEntity> {
    return this._animalService.create(createAnimalDTO);
  }

}
