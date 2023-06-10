import {
  Body,
  Controller,
  Get,
  Inject,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { COFFEE_TYPES } from '../interfaces/types';
import { CoffeeDomain } from '../domain/coffee.domain';
import { ICreateCoffeeApplication } from '../interfaces/applications/create.coffee.application.interface';
import { IGetAllCoffeeApplication } from '../interfaces/applications/getAll.coffee.application.interface';
import { IGetByIdCoffeeApplication } from '../interfaces/applications/getById.coffee.application.interface';

@Controller('coffee')
export class CoffeesController {
  constructor(
    @Inject(COFFEE_TYPES.applications.ICreateCoffeeApplication)
    private createCoffeeApp: ICreateCoffeeApplication,
    @Inject(COFFEE_TYPES.applications.IGetAllCoffeeApplication)
    private getAllCoffeeApp: IGetAllCoffeeApplication,
    @Inject(COFFEE_TYPES.applications.IGetByIdCoffeeApplication)
    private getByIdCoffeeApp: IGetByIdCoffeeApplication,
  ) {}

  @Post()
  async create(@Body() coffeeDomain: CoffeeDomain) {
    const coffee = await this.createCoffeeApp.create(coffeeDomain);
    return coffee;
  }

  @Get()
  async getAll() {
    const coffees = await this.getAllCoffeeApp.getAll();
    return coffees;
  }

  @Get(':id')
  async getById(@Param('id', new ParseIntPipe()) id: number) {
    const coffee = this.getByIdCoffeeApp.getById(id);

    if (!coffee) {
      throw new NotFoundException(`No coffee found with the id: ${id}`);
    }

    return coffee;
  }
}
