import { User } from "./User";
import { Mission } from './Mission'

export class Student implements User {

    constructor(
    public name: string,
    public email: string,
    public birthDate: string,
    public mission: string
   ){}

} 

