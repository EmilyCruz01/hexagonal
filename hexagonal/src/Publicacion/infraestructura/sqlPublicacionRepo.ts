import { Publicacion } from "../dominio/publicacion";
import { PublicacionRepositorio } from "../dominio/publicacionRepositorio";
import PublicacionModel from "./model/PublicacionModel";

export class SqlPublicacionRepo implements PublicacionRepositorio{
    async addPublicacion(id_publicacion:number,titulo: string, contenido: string): Promise<Publicacion | null> {
        try{
            const publicacionCreada= await PublicacionModel.create({id_publicacion,titulo, contenido});

            return new Publicacion(publicacionCreada.id_publicacion,publicacionCreada.titulo,publicacionCreada.contenido);
        }catch(error){
            console.log('error en sqlPublicacionRepo en addPublicacion',error);
            return null;
        }
    }

    async getPublicacionByTitle(titulo: string):Promise<Publicacion | null> {
        try{
            const getPublicacion= await PublicacionModel.findOne({where:{titulo:titulo}});
            if(getPublicacion){
                await getPublicacion.get();
                return new Publicacion(getPublicacion.id_publicacion,getPublicacion.titulo,getPublicacion.contenido);
            }else{
                return null;
            }
        }catch(error){
            console.log('error en sqlPublicacionRepo en getPublicacionByTitle');
            return null;
        }

    }

    async deletePublicacion(id_publicacion: number): Promise<Publicacion | null> {
        try {
            const deletedPublicacion= await PublicacionModel.findOne({where: {id_publicacion:id_publicacion}});
            if(deletedPublicacion){
                await deletedPublicacion.destroy();
                return new Publicacion(deletedPublicacion.id_publicacion,deletedPublicacion.titulo,deletedPublicacion.contenido);
            }else{
                return null;
            }
        } catch (error) {
            console.log("Error en sqlPublicacionRepo en DeletePublicacion", error);
            return null;
        }
    }
}