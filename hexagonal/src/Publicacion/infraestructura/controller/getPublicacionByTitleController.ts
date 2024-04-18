import { Request, Response } from "express";
import { GetPublicacionByTitleUseCase } from "../../aplicacion/getPublicacionByTitleUseCase";

export class GetPublicacionByTitleController{
    constructor(readonly getUsersById:GetPublicacionByTitleUseCase){}
        async run(req:Request, res:Response){
            try{
                let titulo=req.body.titulo;
                console.log(req.body);

                let foundedPublicacion= await this.getUsersById.run(titulo);

                if(foundedPublicacion){
                    return res.status(200).send({
                        status:'succes',
                        data:{
                            id_publicacion: foundedPublicacion.id_publicacion,
                            titulo: foundedPublicacion.titulo,
                            contenido: foundedPublicacion.contenido,
                        },
                        message:'Publicacion encontrada exitosamente'
                    })
                } else{
                    return res.status(400).send({
                        status:'error', 
                        data:[],
                        message:'error al buscar publicacion getPublicacionByTitleController'
                    })
                }
            }catch(error){
                console.log("error en getPublicacionByTitleController",error);
                res.status(500).send({
                    status:'error',
                    message:'error en el servidor'
                })
            }
        }
}