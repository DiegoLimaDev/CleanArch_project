import { Inject, Injectable } from '@nestjs/common';
import { IDeleteTeaApplication } from '../interfaces/application/delete.tea.application.interface';
import { TEA_TYPES } from '../interfaces/types';
import { IDeleteTeaService } from '../interfaces/service/delete.tea.service.interface';

@Injectable()
export class DeleteTeaApplication implements IDeleteTeaApplication {
  constructor(
    @Inject(TEA_TYPES.service.IDeleteTeaService)
    private deleteTeaService: IDeleteTeaService,
  ) {}

  async delete(id: number): Promise<{ deleted: boolean }> {
    return await this.deleteTeaService.delete(id);
  }
}
