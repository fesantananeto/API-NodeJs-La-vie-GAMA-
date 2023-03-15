import Sequelize from "sequelize";

const DB_NAME = 'laviedb';
const DB_USER = 'root';
const DB_PASS = 'Koneko2030*';
const DB_CONFIG = {
    dialect: 'mysql',
    host: 'localhost',
    port: '3306'
};

let db = {};

try{
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch(error){
    console.error('Server cannot connect');
}

async function hasConnection(){
    try{
        await db.authenticate();
        console.log('Connected to Database');
    }catch (error){
        console.error('Server cannot connect');
    }
};

Object.assign(db, {
    hasConnection,
});

export default db;