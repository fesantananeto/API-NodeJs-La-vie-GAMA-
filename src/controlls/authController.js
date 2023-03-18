import { Psicologos } from "../models/index.js";
import  jwt  from "jsonwebtoken";
import secret from "../configs/secret.js";
import bcrypt from 'bcryptjs';

const loginController = {
    async login(req, res){
        const { email, senha} = req.body
        const usuario = await Psicologos.findOne({
            where:{
                email,
            },
        })
        
        if(!usuario || !bcrypt.compareSync(senha, usuario.senha)){
            return res.status(401).json('E-mail ou senha inválido, verifique e tente novamente')
        }
        
        const token = jwt.sign({
            id: usuario.id,
            email: usuario.email,
            nome: usuario.nome,
        },

        secret.key
        );

        return res.json(token);
    },
};

export default loginController;