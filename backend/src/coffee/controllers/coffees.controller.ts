import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { COFFEE_TYPES } from '../interfaces/types';
import { CoffeeDomain } from '../domain/coffee.domain';
import { ICreateCoffeeApplication } from '../interfaces/applications/create.coffee.application.interface';
import { IGetAllCoffeeApplication } from '../interfaces/applications/getAll.coffee.application.interface';
import { IGetByIdCoffeeApplication } from '../interfaces/applications/getById.coffee.application.interface';
import { IDeleteCoffeeApplication } from '../interfaces/applications/delete.coffee.application.interface';
import { IUpdateCoffeeApplication } from '../interfaces/applications/update.coffee.application.interface';
import { PartialCoffeeDomain } from '../domain/partial.coffee.domais';

@Controller('coffee')
export class CoffeesController {
  constructor(
    @Inject(COFFEE_TYPES.applications.ICreateCoffeeApplication)
    private createCoffeeApp: ICreateCoffeeApplication,
    @Inject(COFFEE_TYPES.applications.IGetAllCoffeeApplication)
    private getAllCoffeeApp: IGetAllCoffeeApplication,
    @Inject(COFFEE_TYPES.applications.IGetByIdCoffeeApplication)
    private getByIdCoffeeApp: IGetByIdCoffeeApplication,
    @Inject(COFFEE_TYPES.applications.IDeleteCoffeeApplication)
    private deleteCoffeeApp: IDeleteCoffeeApplication,
    @Inject(COFFEE_TYPES.applications.IUpdateCoffeeApplication)
    private updateCoffeeApp: IUpdateCoffeeApplication,
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

  @Delete('/delete/:id')
  async delete(@Param('id', new ParseIntPipe()) id: number) {
    return await this.deleteCoffeeApp.delete(id);
  }

  @Patch('/update/:id')
  async update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() data: PartialCoffeeDomain,
  ) {
    const updatedCoffee = await this.updateCoffeeApp.update(id, data);
    return updatedCoffee;
  }
}
