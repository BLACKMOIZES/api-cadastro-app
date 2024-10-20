# APICADASTRO-APP

Descrição

O **APICADASTRO-APP** é uma aplicação backend desenvolvida em Node.js usando Express.js, destinada à gestão de usuários. O aplicativo permite cadastrar, listar e autenticar usuários, utilizando um banco de dados SQLite para armazenar informações.

# Funcionalidades

- Cadastro de usuários
- Login de usuários
- Listagem de todos os usuários cadastrados

# Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express.js**: Framework web para construção de APIs.
- **SQLite**: Banco de dados leve para armazenamento de dados.
- **Bcrypt.js**: Biblioteca para hash de senhas.

# Estrutura do Projeto

apicadastro-app │ 
├── backend 
├── config 
│└── database.js 
 # Configuração do banco de dados SQLite │
├── controllers 
│  └── userController.js 
# Lógica para manipulação de usuários │
├── models 
│ └── Usermodel.js 
# Modelo de dados do usuário 
│ ├── routes │ 
│ └── userRoutes.js 
# Rotas relacionadas aos usuários │ 
├── node_modules 
# Dependências do projeto │ 
├── package.json 
# Dependências e scripts do projeto │
 ├── package-lock.json 
 # Versões exatas das dependências │ 
 └── server.js 
# Ponto de entrada da aplicação │ 
 └── README.md # Documentação do projeto

 # Pré-requisitos

Antes de executar o projeto, certifique-se de ter o seguinte instalado:

- [Node.js](https://nodejs.org/) (v14 ou superior)
- [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)

# Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/BLACKMOIZES/apicadastro-app.git
   cd apicadastro-app/backend

Instale as dependencias - npm install

Para iniciar o servidor, execute o seguinte comando no diretório backend - node server.js

O servidor estará disponível em http://localhost:3000

# Endpoints da API

# Cadastro de Usuário
Endpoint: POST /register
Body: json

{
  "nome": "Nome do Usuário",
  "email": "email@example.com",
  "cpf": "000.000.000-00",
  "senha": "suaSenha"
}

# Login de Usuário
Endpoint: POST /login
Body: json

{
  "email": "email@example.com",
  "senha": "suaSenha"
}

# Listar Usuários
Endpoint: GET /
Resposta:
json

[
  {
    "id": 1,
    "nome": "Nome do Usuário",
    "email": "email@example.com",
    "cpf": "000.000.000-00",
    "criado_em": "2024-10-19T00:00:00.000Z",
    "atualizado_em": "2024-10-19T00:00:00.000Z"
  }
]

Licença
Este projeto está licenciado sob a MIT License.

Contato
Nome: Seu Nome
Email: seuemail@example.com