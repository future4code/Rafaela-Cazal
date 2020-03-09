"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const knex_1 = __importDefault(require("knex"));
require('dotenv').config();
const app = express_1.default();
app.use(express_1.default.json()); // Linha mágica (middleware)
const connection = knex_1.default({
    client: 'mysql',
    connection: {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    }
});
app.get('/', (req, res) => {
    const resposta = {
        endpoints: {
            '/ola': 'olá',
            '/getAllUsers': 'mostra todos os usuários cadastrados',
            '/createUser': 'cria um novo usuário',
            '/editUser/:user_id': 'edita o nickname do usuário',
            '/deleteUser/:user_id': 'deleta o usuário pelo id',
            '/getUser/:idOUapelido': 'acha usuário pelo id ou apelido'
        }
    };
    // Exemplo de retorno de um JSON
    res.send(resposta);
});
// mostra todos os usuarios
app.get('/getAllUsers', (request, response) => {
    const query = connection.select('nickname')
        .from('users');
    query.then((result) => {
        response.send(result);
    });
});
// 1. criar usuário 
app.post('/createUser', (req, res) => {
    const nonQuery = connection.insert(req.body).into('users');
    nonQuery.then(() => {
        res.send(`O usuário ${req.body.nickname} foi criado`);
    }).catch((err) => {
        res.send(err);
    });
});
//  2. editar nickname
app.put('/editUser/:user_id', (req, res) => {
    const nonQuery = connection('users')
        .where('user_id', '=', req.params.user_id)
        .update({ nickname: req.body.nickname });
    nonQuery.then(() => {
        res.send(`O usuário ${req.body.nickname} foi modificado`);
    }).catch((err) => {
        res.send(err);
    });
});
//  3. deletar usuário
app.delete('/deleteUser/:user_id', (req, res) => {
    const nonQuery = connection('users')
        .where('user_id', '=', req.params.user_id)
        .del();
    nonQuery.then(() => {
        res.send(`O usuário foi deletado com sucesso`);
    }).catch((err) => {
        res.send(err);
    });
});
// 4. pega usuário pelo nome ou id  
app.get('/getUser/:idOUapelido', (req, res) => {
    const dataUser = req.params.idOUapelido;
    const query = connection.select()
        .from("users")
        .where("user_id", "=", dataUser)
        .orWhere("nickname", "=", dataUser);
    query.then((result) => {
        res.send(result);
    }).catch((err) => {
        res.send(err);
    });
});
// Trecho do código responsável por inicializar todas as APIs
const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
