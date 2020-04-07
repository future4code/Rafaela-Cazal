import { v4 } from "uuid";
import { User } from "../../entities/user";
import { UserGateway } from "../../gateways/userGateway";
import * as bcrypt from 'bcrypt';
import * as jwt from "jsonwebtoken";


export class SignupUC {
    constructor(private userGateway: UserGateway) { }

    public async execute(input: SignupUCInput): Promise<SignupUCOutput | undefined> {
        try {
            const id = v4();

            if (!input) {
                return undefined
            }

            if (input.email.indexOf("@") === -1) {
                throw new Error("Invalid email");
            }

            const hashPassword = await bcrypt.hash(input.password, process.env.SALT_OR_ROUNDS as string)

            const newUser = new User(id, input.name, input.email, hashPassword)

            const token = jwt.sign({userId: newUser.getId()}, process.env.JWT_KEY as string, { expiresIn: '1h'});


            await this.userGateway.createUser(newUser);

            return {
                message: "Usuário criado com sucesso: ", 
                token
            };
        } catch (err) {
            console.log(err)
            throw new Error("Erro ao cadastrar usuário")
        }
    }
}

export interface SignupUCInput {
    name: string;
    email: string;
    password: string;

}

export interface SignupUCOutput {
    message: string;
    token: string
}
