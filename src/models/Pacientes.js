import db from "../database/index.js"
import DataType  from "sequelize";

const Pacientes = db.define("Pacientes",{
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
    idade: {
        type: DataType.INTEGER,
    }

},
{
    tableName: 'pacientes',
});

export default Pacientes;