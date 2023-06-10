import { CreateTeaApplication } from '../applications/create.tea.application';
import { GetAllTeaApplication } from '../applications/getAll.tea.application';
import { GetByIdTeaApplication } from '../applications/getById.tea.application';
import { TEA_TYPES } from '../interfaces/types';
import { CreateTeaService } from '../services/create.tea.service';
import { GetAllTeaService } from '../services/getAll.tea.service';
import { GetByIdTeaService } from '../services/getById.tea.service';

const createTeaApp = {
  provide: TEA_TYPES.application.ICreateTeaApplication,
  useClass: CreateTeaApplication,
};
const getAllTeaApp = {
  provide: TEA_TYPES.application.IGetAllTeaApplication,
  useClass: GetAllTeaApplication,
};
const getByIdTeaApp = {
  provide: TEA_TYPES.application.IGetByIdTeaApplication,
  useClass: GetByIdTeaApplication,
};

const createTeaService = {
  provide: TEA_TYPES.service.ICreateTeaService,
  useClass: CreateTeaService,
};
const getAllTeaService = {
  provide: TEA_TYPES.service.IGetAllTeaService,
  useClass: GetAllTeaService,
};
const getByIdTeaService = {
  provide: TEA_TYPES.service.IGetByIdTeaService,
  useClass: GetByIdTeaService,
};

export const teaProvider = [
  createTeaApp,
  createTeaService,
  getAllTeaApp,
  getAllTeaService,
  getByIdTeaApp,
  getByIdTeaService,
];
