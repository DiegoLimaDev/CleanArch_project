import { Coffee } from '../entities/coffee';

export interface ICoffeeRepository {
  getAll(): Promise<Coffee[]>;
}
