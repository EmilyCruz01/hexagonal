import { SqlUserRepo } from './sqlUserRepo';

import { EncriptServiHelpers } from "./helpers/EncryptHelper";

import {AddUserUseCase} from '../aplicacion/addAminUseCase';
import { AddUserController } from './controller/addUserController';

import { GetUserByIdUseCase } from '../aplicacion/getUserByIdUseCase';
import { GetUserByIdController } from './controller/getUserByIdController';

import { GetAllUsersUseCase } from '../aplicacion/getAllUsersUseCase';
import { GetAllUsersController } from './controller/getAllUsersController';



export const sqlUserRepo= new SqlUserRepo();
export const encryptService = new EncriptServiHelpers();

export const addUserUseCase= new AddUserUseCase(sqlUserRepo, encryptService);
export const addUserController= new AddUserController(addUserUseCase);

export const getUserByIdUseCase= new GetUserByIdUseCase(sqlUserRepo);
export const getUserByIdController= new GetUserByIdController(getUserByIdUseCase);

export const getAllUsersUseCase= new GetAllUsersUseCase(sqlUserRepo);
export const getAllUsersController= new GetAllUsersController(getAllUsersUseCase);
