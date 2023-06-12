export interface IDeleteTeaService {
  delete(id: number): Promise<{ deleted: boolean }>;
}
