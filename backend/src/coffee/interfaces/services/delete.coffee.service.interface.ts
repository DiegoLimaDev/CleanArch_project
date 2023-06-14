export interface IDeleteCoffeeService {
  delete(id: number): Promise<{ deleted: boolean }>;
}
