import { Injectable } from '@nestjs/common';
import { ICreateCoffeeService } from '../interfaces/services/create.coffee.service.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Coffee } from '../domain/coffee.entity';
import { Repository } from 'typeorm';
import { CoffeeDomain } from '../domain/coffee.domain';

@Injectable()
export class CreateCoffeeService implements ICreateCoffeeService {
  constructor(
    @InjectRepository(Coffee) private coffeesRepo: Repository<Coffee>,
  ) {}

  async create(coffee: CoffeeDomain): Promise<CoffeeDomain> {
    return this.coffeesRepo.save(coffee);
  }
}
