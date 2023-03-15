import Atendimentos from './Atendimentos.js';
import Pacientes from './Pacientes.js';
import Psicologos from './Psicologos.js';


Atendimentos.belongsTo(Pacientes,{
    foreignKey: 'paciente_id'
});

Pacientes.hasMany(Atendimentos,{
    foreignKey: 'paciente_id'
});

Atendimentos.belongsTo(Psicologos,{
    foreignKey: 'psicologo_id'
});

Psicologos.hasMany(Atendimentos,{
    foreignKey: 'psicologo_id'
});

export {
    Atendimentos,
    Pacientes,
    Psicologos
};

