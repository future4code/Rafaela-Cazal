import User from "../business/entities/User";
import { BaseDB } from './baseDB';
import { UserGateway } from '../business/gateways/UserGateway';
import firebase from 'firebase';

export class UserDB extends BaseDB implements UserGateway {

  private usersCollection = 'users';

  public async createUser(user: User): Promise<any> {
    try {

      const authUser = await firebase.auth().createUserWithEmailAndPassword(user.getEmail(), user.getPassword())

      const userToken= authUser.user?.getIdToken()

      if(!userToken){
        throw new Error ("could not generate token")
      }

      const userUid = firebase.auth().currentUser?.uid

      if (!userUid) {
          throw new Error ("could not found ID")
      }

      await this.db.collection(this.usersCollection).doc( userUid ).set({
        name: user.getName(),
        email: user.getEmail(),
        birthDate: user.getBirtDate(),
        picture: user.getPicture()
      })
      
      firebase.auth().currentUser?.sendEmailVerification()

      return userToken

    } catch (error) {
      console.log('Error creating new user:', error);
    };
  }


  public async login(email: string, password: string): Promise<any> {
    return await firebase.auth().signInWithEmailAndPassword(email, password)
   }
}