import { Pacientes } from "../models/index.js";


const pacientesController = {

    listarPacientes: async (req, res) =>{

        const listaPacientes = await Pacientes.findAll();
        res.json(listaPacientes);
    },
//
    listarPaciente: async (req, res) => {
        const {id} = req.params;
        const paciente = await Pacientes.findOne({
            where: {
                id,
            },
        })

        if (paciente) {
          res.json(paciente);
        } else {
          res.status(404).json({ message: "Id não encontrado" });
        }
      },
//
    async cadastrarPacientes(req, res){
        
        const { nome, email, idade  } = req.body;
        const novoPaciente = await Pacientes.create({
            nome,
            email,
            idade
        });

        res.status(201).json(novoPaciente);
    },
//
    async atualizarPaciente(req,res){
        const {id} = req.params;
        const { nome, email, idade } = req.body;

        const pacienteAtualizado = await Pacientes.update({
            nome, 
            email, 
            idade
        },
        {
            where: {
                id,
            }
        }

        );
        const paciente = await Pacientes.findOne({ where: { id } });
        res.status(200).json(paciente);
    
    },
//
    async deletarPaciente(req, res){
            const { id } = req.params;
            const deletaPaciente = await Pacientes.findByPk(id);
            if (!deletaPaciente) {
                res.json('Id não encontrado');
              } 
            
        await Pacientes.destroy({
            where: { id }
        });

        res.status(204).send();
        
    },

};

export default pacientesController;