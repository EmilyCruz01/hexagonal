import { Publicacion } from "../dominio/publicacion";
import { PublicacionRepositorio } from "../dominio/publicacionRepositorio";

export class DeletePublicacionUseCase{
    constructor(readonly publicacionRepositorio:PublicacionRepositorio){}
    async run(id_publicacion:number):Promise<Publicacion|null>{
        try{
            const deletedPublicacion= await this.publicacionRepositorio.deletePublicacion(id_publicacion);
            return deletedPublicacion;
        }catch(error){
            console.log("Error en deletePublicacionUseCase",error)
            return null;
        }
    }
}