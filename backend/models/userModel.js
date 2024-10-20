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
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
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
