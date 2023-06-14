import { Injectable } from '@nestjs/common';
import { IUpdateCoffeeService } from '../interfaces/services/update.coffee.service.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Coffee } from '../domain/coffee.entity';
import { Repository } from 'typeorm';
import { CoffeeDomain } from '../domain/coffee.domain';
import { PartialCoffeeDomain } from '../domain/partial.coffee.domais';

@Injectable()
export class UpdateCoffeeService implements IUpdateCoffeeService {
  constructor(
    @InjectRepository(Coffee) private coffeeRepo: Repository<Coffee>,
  ) {}

  async update(id: number, data: PartialCoffeeDomain): Promise<CoffeeDomain> {
    await this.coffeeRepo.update({ id: id }, data);
    return await this.coffeeRepo.findOne(id);
  }
}
