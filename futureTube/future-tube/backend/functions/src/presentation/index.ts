import express from "express";
import { signupEndpoint } from "./endpoints/user/SignUp";
import { loginEndpoint } from "./endpoints/user/Login"
import cors from 'cors';

const app = express();
app.use(cors({ origin: true }), express.json());


app.post('/signup', signupEndpoint);

app.post('/login', loginEndpoint);


export default app;