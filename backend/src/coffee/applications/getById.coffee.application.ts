import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IGetByIdCoffeeApplication } from '../interfaces/applications/getById.coffee.application.interface';
import { COFFEE_TYPES } from '../interfaces/types';
import { IGetByIdCoffeeService } from '../interfaces/services/getById.Coffee.service.interface';
import { CoffeeDomain } from '../domain/coffee.domain';

@Injectable()
export class GetByIdCoffeeApplication implements IGetByIdCoffeeApplication {
  constructor(
    @Inject(COFFEE_TYPES.services.IGetByIdCoffeeService)
    private coffeeService: IGetByIdCoffeeService,
  ) {}

  async getById(id: number): Promise<CoffeeDomain> {
    const coffee = await this.coffeeService.getById(id);

    if (!coffee) {
      throw new NotFoundException(`No coffee found with the id: ${id}`);
    }
    return coffee;
  }
}
