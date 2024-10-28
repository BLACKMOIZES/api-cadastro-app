const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const { Op } = require('sequelize'); // Importa Op para as operações do Sequelize

// Função para registrar um novo usuário
exports.register = async (req, res) => {
    try {
        const { nome, email, cpf, senha } = req.body;
        if (!nome || !email || !cpf || !senha) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
        }

        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'Usuário já existe' });
        }

        const hashedPassword = await bcrypt.hash(senha, 10);
        const user = await User.create({
            nome,
            email,
            cpf,
            senha: hashedPassword,
        });

        res.status(201).json({ message: 'Usuário cadastrado com sucesso!', user });
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        res.status(500).json({ message: 'Erro ao cadastrar usuário', error: error.message });
    }
};

// Função para login do usuário
exports.login = async (req, res) => {
    try {
        const { email, senha } = req.body;
        if (!email || !senha) {
            return res.status(400).json({ message: 'Email e senha são obrigatórios' });
        }

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ message: 'Usuário não encontrado' });
        }

        const isPasswordValid = await bcrypt.compare(senha, user.senha);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Senha inválida' });
        }

        res.status(200).json({ message: 'Login bem-sucedido', user });
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        res.status(500).json({ message: 'Erro ao fazer login', error: error.message });
    }
};

// Função para listar todos os usuários
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        if (!users || users.length === 0) {
            return res.status(404).json({ message: 'Nenhum usuário encontrado.' });
        }
        return res.status(200).json(users);
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        return res.status(500).json({ message: 'Erro ao buscar usuários' });
    }
};

// Função para atualizar um usuário
exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, email, cpf, senha } = req.body;

        // Verificar se o email ou CPF já estão em uso por outro usuário
        const existingUser = await User.findOne({
            where: {
                [Op.or]: [{ email }, { cpf }],
                id: { [Op.ne]: id }
            }
        });
        if (existingUser) {
            return res.status(400).json({ message: 'Email ou CPF já estão em uso por outro usuário.' });
        }

        // Busca o usuário pelo ID
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }

        // Atualiza os dados fornecidos
        user.nome = nome || user.nome;
        user.email = email || user.email;
        user.cpf = cpf || user.cpf;

        // Se a senha foi fornecida, criptografa e atualiza
        if (senha && senha.trim()) {
            user.senha = await bcrypt.hash(senha, 10);
        }

        // Salva as alterações
        await user.save();

        res.status(200).json({ message: 'Usuário atualizado com sucesso!', user });
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        res.status(500).json({ message: 'Erro ao atualizar usuário', error: error.message });
    }
};

// Função para buscar um usuário pelo ID
exports.getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id); // Busca o usuário pelo ID
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }
        return res.status(200).json(user);
    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        return res.status(500).json({ message: 'Erro ao buscar usuário', error: error.message });
    }
};

