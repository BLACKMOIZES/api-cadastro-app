const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,  // Valida que o campo seja um email válido
        },
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,  // Garante que não haja dois usuários com o mesmo CPF
        validate: {
            len: [11, 11],  // Exemplo: CPF deve ter 11 caracteres
        },
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: true,
    createdAt: 'criado_em',  // Renomeia createdAt para criado_em
    updatedAt: 'atualizado_em'  // Renomeia updatedAt para atualizado_em
});

module.exports = User;
