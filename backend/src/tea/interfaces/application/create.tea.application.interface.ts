import { TeaDomain } from 'src/tea/domain/tea.domain';

export interface ICreateTeaApplication {
  create(teaDomain: TeaDomain): Promise<TeaDomain>;
}
