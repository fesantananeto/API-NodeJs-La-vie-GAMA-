import express from 'express';
import atendimentosController from '../controlls/atendimentosController.js';
import pacientesController from '../controlls/PacientesController.js';
import psicologosController from '../controlls/psicologosController.js';
import authController from '../controlls/authController.js';
import loginValidation from '../validations/loginValidation/login.js';
import auth from '../middlewares/auth.js';
import psicologoValidation from '../validations/psicologValidation/psicologoValidation.js';
import pacienteValidation from '../validations/pacienteValidation/pacienteValidation.js';
import atendimentoValidation from '../validations/atendimentoValidation/atendimentoValidation.js';

const routes = express.Router();


routes.post('/login', loginValidation, authController.login);
routes.get('/psicologos', psicologosController.listarPsicologos);
routes.get('/psicologos/:id', psicologosController.listarPsicologo);
routes.post('/psicologos', psicologoValidation, psicologosController.cadastrarPsicologos);
routes.put('/psicologos/:id', psicologoValidation, psicologosController.atualizarPsicologo);
routes.delete('/psicologos/:id', psicologosController.deletarPsicologo);
routes.get('/pacientes', pacientesController.listarPacientes);
routes.get('/pacientes/:id', pacientesController.listarPaciente);
routes.post('/pacientes', pacienteValidation, pacientesController.cadastrarPacientes);
routes.put('/pacientes/:id',pacienteValidation, pacientesController.atualizarPaciente);
routes.delete('/pacientes/:id', pacientesController.deletarPaciente);
routes.get('/atendimentos', atendimentosController.listarAtendimentos);
routes.get('/atendimentos/:id', atendimentosController.listarAtendimento);
routes.post('/atendimentos', atendimentoValidation, auth, atendimentosController.cadastrarAtendimentos);
routes.get('/dashboard/numero-pacientes');
routes.get('/dashboard/numero-atendimentos');
routes.get('/dashboard/numero-psicologos');
routes.get('/dashboard/media-atendimentos-por-psicologos');

export default routes; 