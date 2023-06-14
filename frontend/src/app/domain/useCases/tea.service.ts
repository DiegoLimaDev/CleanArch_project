import { Tea } from '../entities/tea';
import { ITeaRepository } from '../interfaces/tea.repository.interface';

export class TeaServiceImpl {
  teaRepo: ITeaRepository;
  constructor(teaRepo: ITeaRepository) {
    this.teaRepo = teaRepo;
  }
  async getAll(): Promise<Tea[]> {
    return this.teaRepo.getAll();
  }
}
