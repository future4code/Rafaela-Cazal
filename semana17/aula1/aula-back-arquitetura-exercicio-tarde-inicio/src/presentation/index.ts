import express, { Request, Response } from "express";
import { signupEndpoint } from "./endpoints/signup";
import { getUserByEmail } from "./endpoints/getUserByEmail";
import { getAllUsers } from "./endpoints/getAllUsers";
import { editUserEndpoint } from "./endpoints/editUser";
import { deleteUserEndpoint } from "./endpoints/deleteUser";

const app = express();
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
  const resposta = {
    endpoints: {
      '/user/all': 'mostra todos os usuários cadastrados',
      '//user?email=': 'acha usuário pelo email',
      'user/edit': 'edita nome ou email de usuário',
      'user/:id': 'deleta usuário passando id'
    }
  };
  res.send(resposta)
});


app.post("/signup", signupEndpoint);

app.get("/user?email=", getUserByEmail);

app.get("/user/all", getAllUsers);

app.post("user/edit", editUserEndpoint); 

app.delete("user/:id", deleteUserEndpoint);

export default app;
