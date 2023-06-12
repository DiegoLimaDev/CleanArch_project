export interface IDeleteTeaApplication {
  delete(id: number): Promise<{ deleted: boolean }>;
}
