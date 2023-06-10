import { Inject, Injectable } from '@nestjs/common';
import { IGetAllCoffeeApplication } from '../interfaces/applications/getAll.coffee.application.interface';
import { COFFEE_TYPES } from '../interfaces/types';
import { IGetAllCoffeeService } from '../interfaces/services/getAll.coffee.service.interface';
import { CoffeeDomain } from '../domain/coffee.domain';

@Injectable()
export class GetAllCoffeeApplication implements IGetAllCoffeeApplication {
  constructor(
    @Inject(COFFEE_TYPES.services.IGetAllCoffeeService)
    private coffeeService: IGetAllCoffeeService,
  ) {}
  async getAll(): Promise<CoffeeDomain[]> {
    return await this.coffeeService.getAll();
  }
}
