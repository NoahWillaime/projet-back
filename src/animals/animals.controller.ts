import { Controller, Get, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Animal } from './interfaces/animal.interface';
import { AnimalsService } from './animals.service';
import { ApiImplicitParam, ApiNoContentResponse, ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger';
import { HandlerParams } from './validators/HandlerParams';

@Controller('animals')
export class AnimalsController {

  constructor(private readonly _animalService: AnimalsService) {}

  @ApiOkResponse({ description: 'Returns an array of animal' })
  @ApiNoContentResponse( { description: 'No animal in database '} )
  @Get()
  findAll(): Observable<Animal[] | void> {
    return this._animalService.findAll();
  }
  
  @ApiOkResponse({ description: 'Return the animal corresponding with the given id' })
  @ApiNotFoundResponse( { description: 'No animal with the given id' } )
  @ApiImplicitParam({name: 'id', description: 'ID of the animal', type: String})
  @Get(':id')
  findOne(@Param() params: HandlerParams): Observable<Animal> {
    return this._animalService.findOne(params.id);
  }
}
