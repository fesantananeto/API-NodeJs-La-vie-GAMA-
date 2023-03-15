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
          res.status(404).json({ message: "Paciente not found" });
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
        res.json('Paciente Atualizado')
    
    },
//
    async deletarPaciente(req, res){
        try { // tenta fazer o comando abaixo
            const {id} = req.params;

            if (!id) {
                res.json('paciente não encontrado');
              } else {
                res.status(404).json({ message: "Paciente not found" });
              }
            
        await Pacientes.destroy({
            where: {
                id,
            },
        });

        res.status(204);

        }catch(error){ // trata o erro e especifica o que fazer em caso de erro
            return res.status(500).json('Ocorreu algum problema')
        }
        
    },

};

export default pacientesController;