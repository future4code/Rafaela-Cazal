import { UserDB } from "../../data/userDataBase";
import { User } from "../entities/user";


export class EditUserUC {
    constructor(private userDB: UserDB) {

    public async execute(input: EditUserUCInput): Promise<EditUserOutput> {
        const user = await this.userDB.getUserById(input.id)
    
        if(!user){
            throw new Error('User not found')
        }

        if(input.name !== undefined) {
        
        if(input.name === "" ){
            throw new Error("Name not found")

        }

        user: User.setName(input.name)
    }
    
}

export interface EditUserUCInput {
    id: string,
    name: string,
    email: string
}

export interface EditUserOutput {
    message: string
}