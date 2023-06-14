import { Inject, Injectable } from '@nestjs/common';
import { IDeleteCoffeeApplication } from '../interfaces/applications/delete.coffee.application.interface';
import { COFFEE_TYPES } from '../interfaces/types';
import { IDeleteCoffeeService } from '../interfaces/services/delete.coffee.service.interface';

@Injectable()
export class DeleteCoffeeApplication implements IDeleteCoffeeApplication {
  constructor(
    @Inject(COFFEE_TYPES.services.IDeleteCoffeeService)
    private coffeeService: IDeleteCoffeeService,
  ) {}

  async delete(id: number): Promise<{ deleted: boolean }> {
    return await this.coffeeService.delete(id);
  }
}
