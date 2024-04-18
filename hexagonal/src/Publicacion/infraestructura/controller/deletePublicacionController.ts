import { Request, Response } from "express";
import { DeletePublicacionUseCase } from "../../aplicacion/deletePublicacionUseCase";

export class DeletePublicacionController{
    constructor(readonly deletePublicacionUseCase:DeletePublicacionUseCase){}
    async run(req:Request, res:Response){
        try {
            let id_publicacion = req.body.id_publicacion;
            console.log(req.body);

            let deletedPublicacion = await this.deletePublicacionUseCase.run(id_publicacion);

            if(deletedPublicacion){
                res.status(200).send({
                    message:"publicacion eliminada exitosamente"
                })
            }else{
                return res.status(400).send({
                    status:"success",
                    data:[],
                    message:"Error al eliminar publicacion en deletePublicacionController"
                })
            }
        } catch (error) {
            console.log("Error en deletePublicacionController",error);
            res.status(500).send({
                status:"error",
                message:"Error en el servidor"
            })
        }
    }
}