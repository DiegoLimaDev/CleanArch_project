import { TeaDomain } from 'src/tea/domain/tea.domain';

export interface IGetAllTeaService {
  getAll(): Promise<TeaDomain[]>;
}
