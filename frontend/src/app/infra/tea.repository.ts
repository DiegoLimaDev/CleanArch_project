import axios from 'axios';
import { ITeaRepository } from '../domain/interfaces/tea.repository.interface';
import { Tea } from '../domain/entities/tea';

export class TeaRepositoryImpl implements ITeaRepository {
  url = 'http://localhost:3000/api/v1/tea';

  async getAll(): Promise<Tea[]> {
    const data = await axios.get(this.url).then((res) => res.data);
    return data.map((tea: Tea) => ({
      id: tea.id,
      title: tea.title,
      description: tea.description,
      type: tea.type,
      imgUrl: tea.imgUrl,
    }));
  }
}
