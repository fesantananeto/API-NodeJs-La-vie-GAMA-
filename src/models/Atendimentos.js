import db from "../database/index.js";
import DataType  from "sequelize";

const Atendimentos = db.define('Atendimentos',{
    id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    paciente_id: {
        type: DataType.INTEGER,
    },
    psicologo_id: {
        type: DataType.INTEGER,
    },
     data_atendimento: {
        type: DataType.DATE,
     },
    observacao:{
        type: DataType.TEXT,
    }
},
{
    timestamps: false,
    tableName: 'atendimentos',
});

export default Atendimentos;