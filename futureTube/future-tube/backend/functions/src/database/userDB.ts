import User from "../business/entities/User";
import { BaseDB } from './baseDB';
import{ UserGateway } from '../business/gateways/UserGateway';
import firebase from 'firebase';

export class UserDB extends BaseDB implements UserGateway {
  private usersCollection = 'users';

  public async createUser(user: User): Promise <void>{
    firebase.auth().createUserWithEmailAndPassword()
  
  
    .catch(error){
    
    };
    
  }
  
}