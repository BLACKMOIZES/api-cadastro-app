const express = require('express');
const cors = require('cors'); // Importe o middleware CORS
const userRoutes = require('./routes/userRoutes');
const sequelize = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Adiciona o middleware CORS para permitir requisições de outras origens
app.use(express.json()); // Usando express.json() em vez de body-parser
app.use('/api/users', userRoutes);

// Sincronizar o banco de dados
sequelize.sync()
    .then(() => {
        console.log('Banco de dados sincronizado com sucesso');
        app.listen(PORT, () => {
            console.log(`O servidor está sendo executado na porta ${PORT}`);
        });
    })
    .catch(error => {
        console.error('Não foi possível conectar ao banco de dados:', error);
    });
