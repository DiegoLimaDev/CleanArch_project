import { CoffeeDomain } from 'src/coffee/domain/coffee.domain';

export interface IGetAllCoffeeApplication {
  getAll(): Promise<CoffeeDomain[]>;
}
