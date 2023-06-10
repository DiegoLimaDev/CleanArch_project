import { TeaDomain } from 'src/tea/domain/tea.domain';

export interface IGetAllTeaApplication {
  getAll(): Promise<TeaDomain[]>;
}
