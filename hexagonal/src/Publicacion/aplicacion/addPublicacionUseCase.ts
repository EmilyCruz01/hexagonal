import { Publicacion } from "../dominio/publicacion";
import { PublicacionRepositorio } from "../dominio/publicacionRepositorio";

export class AddPublicacionUseCase{
    constructor(readonly publicacionRepositorio:PublicacionRepositorio){}
    async run(id_publicacion:number,titulo:string,contenido:string):Promise<Publicacion|null>{
        try{
            const publicacionCreada= await this.publicacionRepositorio.addPublicacion(id_publicacion,titulo,contenido);
            return publicacionCreada;
        }catch(error){
            console.log('error en addPublicacion',error);
            return null;
        }
    }
}

