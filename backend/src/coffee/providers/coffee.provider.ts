import { CreateCoffeeApplication } from '../applications/create.coffee.application';
import { GetAllCoffeeApplication } from '../applications/getAll.coffee.application';
import { GetByIdCoffeeApplication } from '../applications/getById.coffee.application';
import { COFFEE_TYPES } from '../interfaces/types';
import { CreateCoffeeService } from '../services/create.coffee.service';
import { GetAllCoffeeService } from '../services/getAll.coffee.service';
import { GetByIdCoffeeService } from '../services/getById.coffee.service';

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

export const coffeeProvider = [
  createCoffeeApp,
  createCoffeeService,
  getAllCoffeeApp,
  getAllCoffeeService,
  getByIdCoffeeApp,
  getByidCoffeService,
];
