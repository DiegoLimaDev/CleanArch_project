import { TeaDomain } from 'src/tea/domain/tea.domain';

export interface IGetByIdTeaApplication {
  getById(id: number): Promise<TeaDomain>;
}
