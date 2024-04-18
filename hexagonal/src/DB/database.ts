import { Sequelize } from "sequelize-typescript";
import * as dotenv from 'dotenv';
import UserModel from "../Usuario/infraestructura/model/userModel"
import PublicacionModel from "../Publicacion/infraestructura/model/PublicacionModel";

dotenv.config();

export const sequelize = new Sequelize({
    dialect:"mysql",
    database:process.env.DB,
    username: process.env.USER, 
    password: process.env.PASSWORD,
    host:process.env.HOST,
    port:3306,
    models:[UserModel,PublicacionModel]
});

export async function correrBaseDatos(){
    try {
        await sequelize.authenticate();
        console.log("Conexión lograda");
        await sequelize.sync({force:false});
    } catch (error) {
        console.log("No se puede conectar a la base de datos", error);
    }
}