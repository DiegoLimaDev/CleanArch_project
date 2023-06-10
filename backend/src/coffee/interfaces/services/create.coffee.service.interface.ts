import { CoffeeDomain } from 'src/coffee/domain/coffee.domain';

export interface ICreateCoffeeService {
  create(coffeeDomain: CoffeeDomain): Promise<CoffeeDomain>;
}
