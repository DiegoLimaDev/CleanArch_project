import { Injectable } from '@nestjs/common';
import { IGetAllCoffeeService } from '../interfaces/services/getAll.coffee.service.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Coffee } from '../domain/coffee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GetAllCoffeeService implements IGetAllCoffeeService {
  constructor(
    @InjectRepository(Coffee) private coffeesRepo: Repository<Coffee>,
  ) {}

  async getAll() {
    return this.coffeesRepo.find();
  }
}
