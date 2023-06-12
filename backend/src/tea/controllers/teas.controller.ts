import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Inject,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Res,
} from '@nestjs/common';
import { TEA_TYPES } from '../interfaces/types';
import { ICreateTeaApplication } from '../interfaces/application/create.tea.application.interface';
import { TeaDomain } from '../domain/tea.domain';
import { IGetAllTeaApplication } from '../interfaces/application/getAll.tea.application.interface';
import { IGetByIdTeaApplication } from '../interfaces/application/getById.tea.application.interface';
import { IDeleteTeaApplication } from '../interfaces/application/delete.tea.application.interface';

@Controller('tea')
export class TeasController {
  constructor(
    @Inject(TEA_TYPES.application.ICreateTeaApplication)
    private createTeaApp: ICreateTeaApplication,
    @Inject(TEA_TYPES.application.IGetAllTeaApplication)
    private getAllTeaApp: IGetAllTeaApplication,
    @Inject(TEA_TYPES.application.IGetByIdTeaApplication)
    private getByIdTeaApp: IGetByIdTeaApplication,
    @Inject(TEA_TYPES.application.IDeleteTeaApplication)
    private deleteTeaApp: IDeleteTeaApplication,
  ) {}

  @Post()
  async create(@Body() teaDomain: TeaDomain) {
    const tea = await this.createTeaApp.create(teaDomain);
    return tea;
  }

  @Get()
  async getAll() {
    const teas = await this.getAllTeaApp.getAll();
    return teas;
  }

  @Get(':id')
  async getById(@Param('id', new ParseIntPipe()) id: number) {
    const tea = this.getByIdTeaApp.getById(id);
    if (!tea) {
      throw new NotFoundException(`No tea found with the id: ${id}`);
    }
    return tea;
  }

  @Delete('/delete/:id')
  async delete(@Res() res, @Param('id', new ParseIntPipe()) id: number) {
    return await this.deleteTeaApp.delete(id);
  }
}
