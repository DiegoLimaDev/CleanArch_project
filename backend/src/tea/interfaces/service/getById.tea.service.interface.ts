import { TeaDomain } from 'src/tea/domain/tea.domain';

export interface IGetByIdTeaService {
  getById(id: number): Promise<TeaDomain>;
}
