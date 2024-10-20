const { Sequelize } = require('sequelize');

// Configuração do Sequelize para usar SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite', // O arquivo do banco de dados será criado aqui
    logging: console.log,
});

// Sincroniza o banco de dados e cria as tabelas
sequelize.sync({ force: true })
    .then(() => {
        console.log('Banco de Dados sincronizado com sucesso.');
    })
    .catch((error) => {
        console.error('Erro ao sincronizar o banco de dados:', error);
    });

module.exports = sequelize;
