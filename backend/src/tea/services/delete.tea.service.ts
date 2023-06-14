import { Injectable } from '@nestjs/common';
import { IDeleteTeaService } from '../interfaces/service/delete.tea.service.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Tea } from '../domain/tea.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeleteTeaService implements IDeleteTeaService {
  constructor(@InjectRepository(Tea) private teaRepo: Repository<Tea>) {}

  async delete(id: number): Promise<{ deleted: boolean }> {
    try {
      await this.teaRepo.delete(id);
      return { deleted: true };
    } catch (error) {
      throw error;
      return { deleted: false };
    }
  }
}
