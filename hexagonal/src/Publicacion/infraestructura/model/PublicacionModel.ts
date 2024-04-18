import { AutoIncrement, Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName:"Publicaciones"
})
class PublicacionModel extends Model{
    @Column({
        type:DataType.INTEGER,
        primaryKey:true
    })
    public id_publicacion!:number

    @Column({
        type:DataType.STRING(20),
        allowNull:false
    })
    public titulo!:string

    @Column({
        type:DataType.STRING(100),
        allowNull:false
    })
    public contenido!:string


}

export default PublicacionModel;