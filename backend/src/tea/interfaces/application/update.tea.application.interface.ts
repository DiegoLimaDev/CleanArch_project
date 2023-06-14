import { PartialTeaDomain } from 'src/tea/domain/partial.tea.domain';
import { TeaDomain } from 'src/tea/domain/tea.domain';

export interface IUpdateTeaApplication {
  update(id: number, data: PartialTeaDomain): Promise<TeaDomain>;
}
