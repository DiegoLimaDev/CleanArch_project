import { Injectable } from '@nestjs/common';
import { IUpdateTeaService } from '../interfaces/service/update.tea.service.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Tea } from '../domain/tea.entity';
import { Repository } from 'typeorm';
import { PartialTeaDomain } from '../domain/partial.tea.domain';
import { TeaDomain } from '../domain/tea.domain';

@Injectable()
export class UpdateTeaService implements IUpdateTeaService {
  constructor(@InjectRepository(Tea) private teaRepo: Repository<Tea>) {}

  async update(id: number, data: PartialTeaDomain): Promise<TeaDomain> {
    await this.teaRepo.update({ id: id }, data);
    return await this.teaRepo.findOne({ id: id });
  }
}
