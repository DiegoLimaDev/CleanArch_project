import { Inject, Injectable } from '@nestjs/common';
import { IGetAllTeaApplication } from '../interfaces/application/getAll.tea.application.interface';
import { TEA_TYPES } from '../interfaces/types';
import { IGetAllTeaService } from '../interfaces/service/getAll.tea.service.interface';
import { TeaDomain } from '../domain/tea.domain';

@Injectable()
export class GetAllTeaApplication implements IGetAllTeaApplication {
  constructor(
    @Inject(TEA_TYPES.service.IGetAllTeaService)
    private teaService: IGetAllTeaService,
  ) {}

  async getAll(): Promise<TeaDomain[]> {
    return this.teaService.getAll();
  }
}
