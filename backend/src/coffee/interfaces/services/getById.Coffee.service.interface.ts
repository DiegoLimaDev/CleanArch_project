import { CoffeeDomain } from 'src/coffee/domain/coffee.domain';

export interface IGetByIdCoffeeService {
  getById(id: number): Promise<CoffeeDomain>;
}
