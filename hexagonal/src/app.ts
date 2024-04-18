import express from 'express';
import {correrBaseDatos} from './DB/database'
import * as dotenv from 'dotenv';
import { userRouter } from './Usuario/infraestructura/userRoutes';
import { publicacionRouter } from './Publicacion/infraestructura/publicacionRoutes';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors()); 

app.use('/users', userRouter);
app.use('/publicaciones', publicacionRouter);


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // Establece el origen adecuado
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

async function iniciarServidor(){
    try {
        await correrBaseDatos();
        app.listen(3000, ()=>{
            console.log("Servidor corriendo en el puerto 3000");
        })
    } catch (error) {
        console.log("Error al iniciar el servidor", error);
    }
}

iniciarServidor();