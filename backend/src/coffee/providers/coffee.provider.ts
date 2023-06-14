import { CreateCoffeeApplication } from '../applications/create.coffee.application';
import { DeleteCoffeeApplication } from '../applications/delete.coffee.application';
import { GetAllCoffeeApplication } from '../applications/getAll.coffee.application';
import { GetByIdCoffeeApplication } from '../applications/getById.coffee.application';
import { UpdateCoffeeApplication } from '../applications/update.coffee.application';
import { COFFEE_TYPES } from '../interfaces/types';
import { CreateCoffeeService } from '../services/create.coffee.service';
import { DeleteCoffeeService } from '../services/delete.coffee.service';
import { GetAllCoffeeService } from '../services/getAll.coffee.service';
import { GetByIdCoffeeService } from '../services/getById.coffee.service';
import { UpdateCoffeeService } from '../services/update.coffee.service';

const createCoffeeApp = {
  provide: COFFEE_TYPES.applications.ICreateCoffeeApplication,
  useClass: CreateCoffeeApplication,
};
const getAllCoffeeApp = {
  provide: COFFEE_TYPES.applications.IGetAllCoffeeApplication,
  useClass: GetAllCoffeeApplication,
};
const getByIdCoffeeApp = {
  provide: COFFEE_TYPES.applications.IGetByIdCoffeeApplication,
  useClass: GetByIdCoffeeApplication,
};
const deleteCoffeeApp = {
  provide: COFFEE_TYPES.applications.IDeleteCoffeeApplication,
  useClass: DeleteCoffeeApplication,
};
const updateCoffeeApp = {
  provide: COFFEE_TYPES.applications.IUpdateCoffeeApplication,
  useClass: UpdateCoffeeApplication,
};

const createCoffeeService = {
  provide: COFFEE_TYPES.services.ICreateCoffeeService,
  useClass: CreateCoffeeService,
};
const getAllCoffeeService = {
  provide: COFFEE_TYPES.services.IGetAllCoffeeService,
  useClass: GetAllCoffeeService,
};
const getByidCoffeService = {
  provide: COFFEE_TYPES.services.IGetByIdCoffeeService,
  useClass: GetByIdCoffeeService,
};
const deleteCoffeeService = {
  provide: COFFEE_TYPES.services.IDeleteCoffeeService,
  useClass: DeleteCoffeeService,
};
const updateCoffeeService = {
  provide: COFFEE_TYPES.services.IUpdateCoffeeService,
  useClass: UpdateCoffeeService,
};

export const coffeeProvider = [
  createCoffeeApp,
  createCoffeeService,
  getAllCoffeeApp,
  getAllCoffeeService,
  getByIdCoffeeApp,
  getByidCoffeService,
  deleteCoffeeApp,
  deleteCoffeeService,
  updateCoffeeApp,
  updateCoffeeService,
];
