"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const knex_1 = __importDefault(require("knex"));
const app = express_1.default();
app.use(express_1.default.json()); // Linha mágica (middleware)
const connection = knex_1.default({
    client: 'mysql',
    connection: {
        host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
        user: 'rafaela',
        password: '@opMQtmCjAgTTtjdAO86',
        database: 'bouman-rafaela'
    }
});
app.get('/', (req, res) => {
    const resposta = {
        endpoints: {
            '/ola': 'olá',
            '/getAllUsers': 'mostra todos os usuários cadastrados',
            '/createUser': 'cria um novo usuário',
            '/editUser/:user_id': 'edita o nickname do usuário',
            '/deleteUser/:user_id': 'deleta o usuário pelo id'
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
//  editar nickname
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
//  deletar usuário
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
// app.get('/getAllAsianCountries', async (request: Request, response: Response) => {
//   const query = connection.select('Name')
//     .from('country')
//     .where('Continent', 'Asia');
//   const result = await query;
//   response.send(result);
// });
// app.get('/getActorsByName', (request: Request, response: Response)=>{
//   const hasQueryString = Object.values(request.query).length > 0;
//   if(hasQueryString){
//     const nameToFind = request.query.name;
//     const query = connection.raw(`SELECT first_name from actors WHERE first_name LIKE "%${nameToFind}%"`);
//     query.then((result)=>{
//       response.send(result);
//     })
//   }else{
//     response.end(400);
//   }
// });
// app.get('/getBooksBeforeDate/:dateToCompare', async (req:Request, res:Response)=>{
//   const dateToCompare = req.params.dateToCompare;
//   const query = connection.raw(`SELECT titulo, ano FROM livros WHERE ano < "${dateToCompare}"
//     order by titulo`);
//   const result = await query;
//   res.send(result);
// });
// app.get('/ping', (req: Request, res: Response) => {
//   const hasQueryString = Object.values(req.query).length > 0;
//   if(hasQueryString){
//     // Exemplo de retorno de um JSON
//     res.send(req.query);
//   } else {
//     // Exemplo de retorno de texto "puro"
//     res.send('pong (nenhuma query string foi passada)');
//   }
// });
// app.get('/hello/:name', (req: Request, res: Response) => {
//   const resposta = `<h1>Olá ${req.params.name}, seja bem-vindo(a) à Future4.</h1>`;
//   // Exemplo de retorno de HTML
//   res.send(resposta)
// });
// app.post('/mirror/:cor', (req: Request, res: Response) => {
//   let responseBody;
//   if(req.params.cor !== "0"){
//     responseBody = { ...req.body, corPredileta: req.params.cor };
//   } else {
//     responseBody = { ...req.body, corPredileta: "NAO INFORMADA" };
//   }
//   res.send(responseBody);
// });
