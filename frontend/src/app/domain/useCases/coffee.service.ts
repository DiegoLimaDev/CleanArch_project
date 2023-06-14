import { Coffee } from '../entities/coffee';
import { ICoffeeRepository } from '../interfaces/coffee.repository.interface';

export class CoffeeServiceImpl {
  coffeeRepo: ICoffeeRepository;
  constructor(coffeeRepo: ICoffeeRepository) {
    this.coffeeRepo = coffeeRepo;
  }

  async getAll(): Promise<Coffee[]> {
    return await this.coffeeRepo.getAll();
  }
}
