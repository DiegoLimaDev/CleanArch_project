import { CoffeeDomain } from 'src/coffee/domain/coffee.domain';

export interface ICreateCoffeeApplication {
  create(coffeeDomain: CoffeeDomain): Promise<CoffeeDomain>;
}
