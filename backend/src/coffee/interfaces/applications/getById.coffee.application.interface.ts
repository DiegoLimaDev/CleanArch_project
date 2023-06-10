import { CoffeeDomain } from 'src/coffee/domain/coffee.domain';

export interface IGetByIdCoffeeApplication {
  getById(id: number): Promise<CoffeeDomain>;
}
