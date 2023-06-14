import { Inject, Injectable } from '@nestjs/common';
import { IUpdateTeaApplication } from '../interfaces/application/update.tea.application.interface';
import { TEA_TYPES } from '../interfaces/types';
import { PartialTeaDomain } from '../domain/partial.tea.domain';
import { TeaDomain } from '../domain/tea.domain';

@Injectable()
export class UpdateTeaApplication implements IUpdateTeaApplication {
  constructor(
    @Inject(TEA_TYPES.service.IUpdateTeaService)
    private teaService: IUpdateTeaApplication,
  ) {}

  async update(id: number, data: PartialTeaDomain): Promise<TeaDomain> {
    return await this.teaService.update(id, data);
  }
}
