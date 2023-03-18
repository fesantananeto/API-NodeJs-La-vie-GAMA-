import db from "../database/index.js"
import DataType  from "sequelize";

const Psicologos = db.define("Psicologos",{
    id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataType.STRING,
    },
    email: {
        type: DataType.STRING,
    },
    senha: {
        type: DataType.STRING,
    },
    apresentacao:{
        type: DataType.TEXT,
    }
},
{
    timestamps: false,
    tableName: 'psicologos',
});

export default Psicologos;