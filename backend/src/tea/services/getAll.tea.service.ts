import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tea } from '../domain/tea.entity';
import { Repository } from 'typeorm';
import { IGetAllTeaService } from '../interfaces/service/getAll.tea.service.interface';
import { TeaDomain } from '../domain/tea.domain';

@Injectable()
export class GetAllTeaService implements IGetAllTeaService {
  constructor(@InjectRepository(Tea) private teaRepo: Repository<Tea>) {}

  async getAll(): Promise<TeaDomain[]> {
    return this.teaRepo.find();
  }
}
