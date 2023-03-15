import { Psicologos } from "../models/index.js";


const psicologosController = {

    listarPsicologos: async (req, res) =>{

        const listaPsicologos = await Psicologos.findAll();
        res.json(listaPsicologos);
    },
//
    listarPsicologo: async (req, res) => {
        const listaPsicologos = req.params;
        const psicologo = await Psicologos.findByPk(id, {
         
        });
        if (psicologo) {
          res.json(psicologo);
        } else {
          res.status(404).json({ message: "Psicologo not found" });
        }
      },
//
    async cadastrarPsicologos(req, res){
        
        const { nome, email, senha, apresentacao  } = req.body;
        const novoPsicologo = await Psicologos.create({
            nome,
            email,
            senha,
            apresentacao

        });

        res.status(201).json(novoPsicologo);
    },
//
    async atualizarPsicologo(req,res){
        const {id} = req.params;
        const { nome, email, senha, apresentacao } = req.body;

        const psicologoAtualizado = await Paceintes.update({
            nome, 
            email, 
            senha,
            apresentacao
        },
        {
            where: {
                id,
            }
        }

        );
        res.json('Psicologo Atualizado')
    
    },
//
    async deletarPaciente(req, res){
        try { // tenta fazer o comando abaixo
            const {id} = req.params;

        await Psicologos.destroy({
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

export default psicologosController;