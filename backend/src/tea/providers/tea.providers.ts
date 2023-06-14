import { CreateTeaApplication } from '../applications/create.tea.application';
import { DeleteTeaApplication } from '../applications/delete.tea.application';
import { GetAllTeaApplication } from '../applications/getAll.tea.application';
import { GetByIdTeaApplication } from '../applications/getById.tea.application';
import { UpdateTeaApplication } from '../applications/update.tea.application';
import { TEA_TYPES } from '../interfaces/types';
import { CreateTeaService } from '../services/create.tea.service';
import { DeleteTeaService } from '../services/delete.tea.service';
import { GetAllTeaService } from '../services/getAll.tea.service';
import { GetByIdTeaService } from '../services/getById.tea.service';
import { UpdateTeaService } from '../services/update.tea.service';

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
const deleteTeaApp = {
  provide: TEA_TYPES.application.IDeleteTeaApplication,
  useClass: DeleteTeaApplication,
};
const updateTeaApp = {
  provide: TEA_TYPES.application.IUpdateTeaApplication,
  useClass: UpdateTeaApplication,
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
const deleteTeaService = {
  provide: TEA_TYPES.service.IDeleteTeaService,
  useClass: DeleteTeaService,
};
const updateTeaService = {
  provide: TEA_TYPES.service.IUpdateTeaService,
  useClass: UpdateTeaService,
};

export const teaProvider = [
  createTeaApp,
  createTeaService,
  getAllTeaApp,
  getAllTeaService,
  getByIdTeaApp,
  getByIdTeaService,
  deleteTeaApp,
  deleteTeaService,
  updateTeaApp,
  updateTeaService,
];
