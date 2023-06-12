import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IGetByIdTeaApplication } from '../interfaces/application/getById.tea.application.interface';
import { TEA_TYPES } from '../interfaces/types';
import { IGetByIdTeaService } from '../interfaces/service/getById.tea.service.interface';
import { TeaDomain } from '../domain/tea.domain';

@Injectable()
export class GetByIdTeaApplication implements IGetByIdTeaApplication {
  constructor(
    @Inject(TEA_TYPES.service.IGetByIdTeaService)
    private teaService: IGetByIdTeaService,
  ) {}

  async getById(id: number): Promise<TeaDomain> {
    const tea = await this.teaService.getById(id);

    if (!tea) {
      throw new NotFoundException(`No tea found with the id: ${id}`);
    }
    return tea;
  }
}
