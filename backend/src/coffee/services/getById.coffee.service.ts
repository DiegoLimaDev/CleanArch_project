import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Coffee } from '../domain/coffee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GetByIdCoffeeService {
  constructor(
    @InjectRepository(Coffee) private coffeesRepo: Repository<Coffee>,
  ) {}

  async getById(id: string) {
    const coffee = await this.coffeesRepo.findOne(id);
    return coffee;
  }
}
