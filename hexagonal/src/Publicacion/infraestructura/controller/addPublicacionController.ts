import { Request, Response  } from "express";
import { AddPublicacionUseCase } from "../../aplicacion/addPublicacionUseCase";

export class AddPublicacionController{
    constructor(readonly addPublicacionUseCase:AddPublicacionUseCase){}
    async run(req:Request, res:Response){
        try{
            let id_publicacion= req.body.id_publicacion;
            let titulo=req.body.titulo;
            let contenido=req.body.contenido;
            console.log(req.body);

            let publicacionCreada= await this.addPublicacionUseCase.run(id_publicacion,titulo,contenido);

            if(publicacionCreada){
                return res.status(200).send({
                    status: 'succes',
                    data:{
                        id_publicacion:publicacionCreada.id_publicacion,
                        titulo: publicacionCreada.titulo,
                        contenido:publicacionCreada.contenido,
                    },
                    message:'Publicacion creada exitosamente'
                })
        } else{
            return res.status(400).send({
                status:'succes',
                data:[],
                message:'Error al publicar addPublicacionController'
            })
        }
    }catch(error){
        console.log('error en addPublicacionController', error);
        res.status(500).send({
            status:'error',
            message:'error en el servidor'
        })
    }
}
}