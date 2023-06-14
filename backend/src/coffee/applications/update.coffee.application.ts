import { Inject, Injectable } from '@nestjs/common';
import { IUpdateCoffeeApplication } from '../interfaces/applications/update.coffee.application.interface';
import { COFFEE_TYPES } from '../interfaces/types';
import { IUpdateCoffeeService } from '../interfaces/services/update.coffee.service.interface';
import { CoffeeDomain } from '../domain/coffee.domain';
import { PartialCoffeeDomain } from '../domain/partial.coffee.domais';

@Injectable()
export class UpdateCoffeeApplication implements IUpdateCoffeeApplication {
  constructor(
    @Inject(COFFEE_TYPES.services.IUpdateCoffeeService)
    private cofeeService: IUpdateCoffeeService,
  ) {}

  async update(id: number, data: PartialCoffeeDomain): Promise<CoffeeDomain> {
    return await this.cofeeService.update(id, data);
  }
}
