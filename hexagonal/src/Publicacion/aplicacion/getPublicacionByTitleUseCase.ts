import {Publicacion} from '../dominio/publicacion'
import { PublicacionRepositorio } from '../dominio/publicacionRepositorio'

export class GetPublicacionByTitleUseCase{
    constructor(readonly publicacionRepositorio:PublicacionRepositorio){}

    async run(titulo:string):Promise<Publicacion|null>{
        try{
            const getPublicacion= await this.publicacionRepositorio.getPublicacionByTitle(titulo);
            return getPublicacion;
            
        }catch(error){
            console.log("Error en getPublicacionByTitleUseCase", error);
            return null;
        }
    }
}