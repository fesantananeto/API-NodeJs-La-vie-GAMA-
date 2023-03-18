import { Atendimentos } from "../models/index.js";
import jwt from "jsonwebtoken";
import secret from "../configs/secret.js";

const atendimentosController = {

    listarAtendimentos: async (req, res) =>{

        const listaAtendimentos = await Atendimentos.findAll();
        res.json(listaAtendimentos);
    },
//
    listarAtendimento: async (req, res) => {
        const {id} = req.params;
        const atendimento = await Atendimentos.findOne({
            where: {
                id,
            },
        })

        if (atendimento) {
          res.json(atendimento);
        } else {
          res.status(404).json({ message: "Paciente not found" });
        }
      },
//
     async cadastrarAtendimentos(req, res){
        try {
            
            const { paciente_id, data_atendimento, observacao } = req.body;
        
            
            const token = req.headers.authorization.split(' ')[1];
        

            const decodedToken = jwt.verify(token, secret.key);
            const psicologo_id = decodedToken.id;
            
           
            const novoAtendimento = await Atendimentos.create({
                paciente_id,
                psicologo_id,
                data_atendimento,
                observacao,
            });
        
            
            res.status(201).json(novoAtendimento);
          } catch (error) {
            
            console.error(error);
            res.status(500).json({ message: 'Erro ao cadastrar atendimento.' });
          }
        }
        
  
 
};

export default atendimentosController;