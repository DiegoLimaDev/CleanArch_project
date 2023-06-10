import { CoffeeDomain } from 'src/coffee/domain/coffee.domain';

export interface IGetAllCoffeeService {
  getAll(): Promise<CoffeeDomain[]>;
}
