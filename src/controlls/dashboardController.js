import { Pacientes, Psicologos, Atendimentos } from "../models/index.js";
import  sequelize from "sequelize";


const dashboardController = {
  async numeroPacientes(req, res) {
    try {
      const numeroPacientes = await Pacientes.count();
      res.json(numeroPacientes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao obter número de pacientes." });
    }
  },
  
  async numeroPsicologos(req, res) {
    try {
      const numeroPsicologos = await Psicologos.count();
      res.json(numeroPsicologos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao obter número de pacientes." });
    }
  },

  async numeroAtendimentos(req, res) {
    try {
      const numeroAtendimentos = await Atendimentos.count();
      res.json(numeroAtendimentos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao obter número de pacientes." });
    }
  },

 

};

export default dashboardController;
