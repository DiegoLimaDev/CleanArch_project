import { TeaDomain } from 'src/tea/domain/tea.domain';

export interface ICreateTeaService {
  create(teaDomain: TeaDomain): Promise<TeaDomain>;
}
