import { Injectable } from '@nestjs/common';
import { ICreateTeaService } from '../interfaces/service/create.tea.service.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Tea } from '../domain/tea.entity';
import { Repository } from 'typeorm';
import { TeaDomain } from '../domain/tea.domain';

@Injectable()
export class CreateTeaService implements ICreateTeaService {
  constructor(@InjectRepository(Tea) private teasRepo: Repository<Tea>) {}

  async create(teaDomain: TeaDomain): Promise<TeaDomain> {
    return this.teasRepo.save(teaDomain);
  }
}
