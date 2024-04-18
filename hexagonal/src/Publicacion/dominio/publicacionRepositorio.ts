import { Publicacion } from "./publicacion";

export interface PublicacionRepositorio{
    addPublicacion(id_publicacion:number,titulo:string, contenido:string):Promise<Publicacion|null>;
    getPublicacionByTitle(titulo:string):Promise<Publicacion|null>;
    deletePublicacion(id_publicacion:number):Promise<Publicacion|null>;
}