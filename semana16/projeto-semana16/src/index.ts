import express, { Request, Response } from "express";
import { AddressInfo } from 'net'
import knex from 'knex';

const app = express();
app.use(express.json()); // Linha mágica (middleware)

const connection = knex({
  client: 'mysql',
  connection: {
    host : 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
    user : 'rafaela',
    password : '@opMQtmCjAgTTtjdAO86',
    database : 'bouman-rafaela'
  }
});

app.get('/', (req: Request, res: Response) => {
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
  res.send(resposta)
});


// mostra todos os usuarios
app.get('/getAllUsers', (request: Request, response:Response)=>{
  const query = connection.select('nickname')
                          .from('users')
  query.then((result)=>{
    response.send(result)
  });
});

// 1. criar usuário 

app.post('/createUser', (req: Request, res: Response)=>{

  const nonQuery = connection.insert(req.body).into('users');

    nonQuery.then(()=>{
      res.send(`O usuário ${req.body.nickname} foi criado`);
    }).catch((err: Error)=>{
      res.send(err);
    })
  });

//  2. editar nickname
  app.put('/editUser/:user_id', (req: Request, res: Response)=>{

    const nonQuery = connection('users')
                    .where('user_id', '=', req.params.user_id)
                    .update({nickname: req.body.nickname});
  
      nonQuery.then(()=>{
        res.send(`O usuário ${req.body.nickname} foi modificado`);
      }).catch((err: Error)=>{
        res.send(err);
      })
    });

//  3. deletar usuário
app.delete('/deleteUser/:user_id', (req: Request, res: Response)=>{

  const nonQuery = connection('users')
                  .where('user_id', '=', req.params.user_id)
                  .del();

    nonQuery.then(()=>{
      res.send(`O usuário foi deletado com sucesso`);
    }).catch((err: Error)=>{
      res.send(err);
    })
  }); 

   // 4. pega usuário pelo nome ou id  
  app.get('/getUser/:idOUapelido', (req: Request, res:Response)=>{

    const dataUser = req.params.idOUapelido

       const query = connection.select()
                      .from("users")
                      .where("user_id", "=", dataUser)
                      .orWhere("nickname", "=", dataUser)
      query.then((result)=> {
        res.send(result)
      }).catch((err: Error) => {
        res.send(err)
      })
    }); 




// Trecho do código responsável por inicializar todas as APIs
const server = app.listen(process.env.PORT || 3000, () => {
  if(server){
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});










