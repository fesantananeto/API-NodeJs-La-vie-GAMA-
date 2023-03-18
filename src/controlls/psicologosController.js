import { Psicologos } from "../models/index.js";
import bcrypt from 'bcryptjs';

const psicologosController = {

    listarPsicologos: async (req, res) =>{

        const listaPsicologos = await Psicologos.findAll();
        res.status(200).json(listaPsicologos);
    },
//
    listarPsicologo: async (req, res) => {
        const {id} = req.params;
        const psicologo = await Psicologos.findOne({
            where: {
                id,
            },
        })

        if (psicologo) {
          res.json(psicologo);
        } else {
          res.status(404).json({ message: "Id não encontrado" });
        }
      },
//
    async cadastrarPsicologos(req, res){
        
        const { nome, email, senha, apresentacao  } = req.body;
        const novaSenha = bcrypt.hashSync(senha, 10);
        const novoPsicologo = await Psicologos.create({
            nome,
            email,
            senha: novaSenha,
            apresentacao,
        });

        res.status(201).json(novoPsicologo);
    },
//
    async atualizarPsicologo(req,res){
        const { id } = req.params;
        const { nome, email, senha, apresentacao } = req.body;
        const novaSenha = bcrypt.hashSync(senha, 10);

        const [psicologoAtualizado] = await Psicologos.update({
            nome, 
            email, 
            senha: novaSenha,
            apresentacao
        },
        {
            where: { id } , 
           
        }
        

        );
        const psicologo = await Psicologos.findOne({ where: { id } });
        res.status(200).json(psicologo);
    
    },
//
 async deletarPsicologo(req, res){
        const { id } = req.params;
        const deletaPsicologo = await Psicologos.findByPk(id);
        if(!deletaPsicologo){
            return res.status(404).json('Id não encontrado');
        }
        await Psicologos.destroy({
            where: { id}
        });

        res.status(204).send();

    } 
};

export default psicologosController;