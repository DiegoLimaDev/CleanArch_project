import { Injectable } from '@nestjs/common';
import { IDeleteCoffeeService } from '../interfaces/services/delete.coffee.service.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Coffee } from '../domain/coffee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeleteCoffeeService implements IDeleteCoffeeService {
  constructor(
    @InjectRepository(Coffee) private coffeeRepo: Repository<Coffee>,
  ) {}

  async delete(id: number): Promise<{ deleted: boolean }> {
    await this.coffeeRepo.delete({ id: id });
    return { deleted: true };
  }
}
