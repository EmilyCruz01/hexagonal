import express from 'express'
import { addPublicacionController, getPublicacionByTitleController, deletePublicacionController} from './dependencies';//aqui van todos los controladores

export const publicacionRouter= express.Router();

publicacionRouter.post('/',(req,res)=>{
    addPublicacionController.run(req,res)
    .then(()=>{
        return null
    })
    .catch(error =>{
        console.error(error);
        res.status(500).send('Error en el archivo PublicacionRoutes');
    });
});

publicacionRouter.get('/title',(req,res)=>{
    getPublicacionByTitleController.run(req,res)
    .then(()=>{
        return null
    })
    .catch(error =>{
        console.error(error);
        res.status(500).send('Error en el archivo PublicacionRoutes');
    });
});

publicacionRouter.delete('/id',(req,res)=>{
    deletePublicacionController.run(req,res)
    .then(()=>{
        return null
    })
    .catch(error =>{
        console.error(error);
        res.status(500).send('Error en el archivo PublicacionnRoutes');
    });
});

