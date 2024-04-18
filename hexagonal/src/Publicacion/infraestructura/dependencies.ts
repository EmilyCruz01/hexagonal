import { SqlPublicacionRepo } from "./sqlPublicacionRepo";

import { AddPublicacionUseCase } from "../aplicacion/addPublicacionUseCase";
import { AddPublicacionController } from "./controller/addPublicacionController";

import {GetPublicacionByTitleUseCase } from "../aplicacion/getPublicacionByTitleUseCase";
import {GetPublicacionByTitleController } from "./controller/getPublicacionByTitleController";

import { DeletePublicacionUseCase } from "../aplicacion/deletePublicacionUseCase";
import { DeletePublicacionController } from "./controller/deletePublicacionController";

export const sqlPublicacionRepo= new SqlPublicacionRepo();
export const addPublicacionUseCase= new AddPublicacionUseCase(sqlPublicacionRepo);
export const addPublicacionController= new AddPublicacionController(addPublicacionUseCase);

export const getPublicacionByTitleUseCase= new GetPublicacionByTitleUseCase(sqlPublicacionRepo);
export const getPublicacionByTitleController= new GetPublicacionByTitleController(getPublicacionByTitleUseCase);

export const deletePublicacionUseCase= new DeletePublicacionUseCase(sqlPublicacionRepo);
export const deletePublicacionController= new DeletePublicacionController(deletePublicacionUseCase);
