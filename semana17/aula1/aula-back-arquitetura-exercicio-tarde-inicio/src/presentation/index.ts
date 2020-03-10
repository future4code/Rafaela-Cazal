import express, { Request, Response } from "express";
import { signupEndpoint } from "./endpoints/signup";
import { getUserByEmail } from "./endpoints/getUserByEmail";
import { getAllUsers } from "./endpoints/getAllUsers";

const app = express();
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
    const resposta = {
      endpoints: {
        '/user/all': 'mostra todos os usuários cadastrados',
        '/signup': 'cadastro de usuário',
        '/user': 'acha usuário pelo email'
      }
    };
    res.send(resposta)
  });

  
app.post("/signup", signupEndpoint);

app.get("/user", getUserByEmail);

app.get("/user/all", getAllUsers);



export default app;
