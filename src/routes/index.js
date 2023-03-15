import express from 'express';
import pacientesController from '../controlls/PacientesController.js';

const routes = express.Router();


routes.post('/login');
routes.get('/psicologos',);
routes.get('/psicologos/:id',);
routes.post('/psicologos',);
routes.put('/psicologos/:id',);
routes.delete('psicologos/:id',);
routes.get('/pacientes', pacientesController.listarPacientes);
routes.get('/pacientes/:id', pacientesController.listarPaciente);
routes.post('/pacientes', pacientesController.cadastrarPacientes);
routes.put('/pacientes/:id', pacientesController.atualizarPaciente);
routes.delete('/pacientes/:id', pacientesController.deletarPaciente);
routes.get('/atendimentos',);
routes.post('/atendimentos',);
routes.get('/dashboard/numero-pacientes');
routes.get('/dashboard/numero-atendimentos');
routes.get('/dashboard/numero-psicologos');
routes.get('/dashboard/media-atendimentos-por-psicologos');

export default routes; 