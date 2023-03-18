import { validate, Joi } from "express-validation";

export default validate({
    body: Joi.object({
        paciente_id: Joi.number().integer().required(),
        data_atendimento: Joi.date().required(),
        observacao: Joi.string().required(),
    }),
});