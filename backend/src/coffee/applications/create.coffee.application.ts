import { Inject, Injectable } from '@nestjs/common';
import { ICreateCoffeeApplication } from '../interfaces/applications/create.coffee.application.interface';
import { COFFEE_TYPES } from '../interfaces/types';
import { ICreateCoffeeService } from '../interfaces/services/create.coffee.service.interface';
import { CoffeeDomain } from '../domain/coffee.domain';

@Injectable()
export class CreateCoffeeApplication implements ICreateCoffeeApplication {
  constructor(
    @Inject(COFFEE_TYPES.services.ICreateCoffeeService)
    private coffeeService: ICreateCoffeeService,
  ) {}

  async create(coffee: CoffeeDomain): Promise<CoffeeDomain> {
    return this.coffeeService.create(coffee);
  }
}
