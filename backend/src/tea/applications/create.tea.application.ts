import { Inject, Injectable } from '@nestjs/common';
import { ICreateTeaApplication } from '../interfaces/application/create.tea.application.interface';
import { TEA_TYPES } from '../interfaces/types';
import { ICreateTeaService } from '../interfaces/service/create.tea.service.interface';
import { TeaDomain } from '../domain/tea.domain';

@Injectable()
export class CreateTeaApplication implements ICreateTeaApplication {
  constructor(
    @Inject(TEA_TYPES.service.ICreateTeaService)
    private teaService: ICreateTeaService,
  ) {}

  async create(teaDomain: TeaDomain): Promise<TeaDomain> {
    return this.teaService.create(teaDomain);
  }
}
