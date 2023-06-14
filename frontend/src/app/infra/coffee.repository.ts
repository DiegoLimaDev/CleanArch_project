import axios from 'axios';
import { ICoffeeRepository } from '../domain/interfaces/coffee.repository.interface';
import { Coffee } from '../domain/entities/coffee';

export class CoffeeRepositoryImpl implements ICoffeeRepository {
  url = 'http://localhost:3000/api/v1/coffee';

  async getAll(): Promise<Coffee[]> {
    const data = await axios.get(this.url).then((res) => res.data);
    return data.map((coffee: Coffee) => ({
      id: coffee.id,
      title: coffee.title,
      description: coffee.description,
      type: coffee.type,
      imgUrl: coffee.imgUrl,
    }));
  }
}
