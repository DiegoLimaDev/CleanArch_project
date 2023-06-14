import { Tea } from '../entities/tea';

export interface ITeaRepository {
  getAll(): Promise<Tea[]>;
}
