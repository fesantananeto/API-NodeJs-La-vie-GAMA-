import express from 'express';
import routes from './routes/index.js';
import db from './database/index.js';
//import handleError from './middlewares/handleError.js';
const app = express();

db.hasConnection();

app.use(express.json());

app.use(routes);

//app.use(handleError);

app.listen(3333, ()=>console.log('Server on 3333 port'));
