import { Injectable } from '@nestjs/common';
import { IGetByIdTeaService } from '../interfaces/service/getById.tea.service.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Tea } from '../domain/tea.entity';
import { Repository } from 'typeorm';
import { TeaDomain } from '../domain/tea.domain';

@Injectable()
export class GetByIdTeaService implements IGetByIdTeaService {
  constructor(@InjectRepository(Tea) private teaService: Repository<Tea>) {}

  async getById(id: number): Promise<TeaDomain> {
    const tea = await this.teaService.findOne(id);
    return tea;
  }
}
