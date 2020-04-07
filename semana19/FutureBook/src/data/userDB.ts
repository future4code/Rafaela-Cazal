import { BaseDB } from "./baseDB";
import { UserGateway } from "../business/gateways/userGateway";
import { User } from "../business/entities/user";

export class UserDB extends BaseDB implements UserGateway {
  private userTableName = "users";


  public async createUser(user: User): Promise<void> {
    await this.connection.raw(`
      INSERT INTO ${this.userTableName} (id, name, email, password) 
      VALUES(
        '${user.getId()}',
        '${user.getName()}',
        '${user.getEmail()}',
        '${user.getPassword()}'
      );`
    )
  }

  public async getUserByEmail(email: string): Promise<User | undefined> {
    const result = await this.connection.raw(
      `SELECT * FROM ${this.userTableName} WHERE email='${email}'`
    );

    if (!result[0][0]) {
      return undefined
    }

    return new User(result[0][0].id, result[0][0].name, result[0][0].email, result[0][0].password);
  }

  public async getUserById(id: string): Promise<User | undefined> {
    const result = await this.connection.raw(
      `SELECT * FROM ${this.userTableName} WHERE id='${id}'`
    );

    return new User(result[0][0].id, result[0][0].name, result[0][0].email, result[0][0].password, result[0][0].passwordTime);
  }


  public async createFriendShipRelation(userId: string, friendId: string): Promise<void> {
    await this.connection.raw(
      `INSERT INTO friends_relation (user_id, friend_id)
      VALUES('${userId}','${friendId}');`
    );

  }

  public async cancelFriendShip(userId: string, friendId: string): Promise<void> {
    await this.connection.raw(

      `DELETE FROM friends_relation WHERE user_id = '${userId}' AND friend_id = '${friendId}'
      `
    );
  }

}