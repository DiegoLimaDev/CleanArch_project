export interface IDeleteCoffeeApplication {
  delete(id: number): Promise<{ deleted: boolean }>;
}
