import { Inject, Injectable } from '@nestjs/common';
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
    try {
      const tea = await this.teaService.getById(id);
      return tea;
    } catch (error) {
      throw error;
    }
  }
}
