import { CoffeeDomain } from 'src/coffee/domain/coffee.domain';
import { PartialCoffeeDomain } from 'src/coffee/domain/partial.coffee.domais';

export interface IUpdateCoffeeApplication {
  update(id: number, data: PartialCoffeeDomain): Promise<CoffeeDomain>;
}
