import { UserGateway } from "../business/gateways/userGateway";
import { BaseDB } from "./baseDB";
import { User } from "../business/entities/user";


export class UserDB extends BaseDB implements UserGateway {
  private userTableName = "users";

  public async createUser(user: User): Promise<void> {
    await this.connection.raw(`
      INSERT INTO ${this.userTableName} (id, email, password, name, birthDate) 
      VALUES(
        '${user.getId()}',
        '${user.getEmail()}',
        '${user.getPassword()}',
        '${user.getName()}',
        '${user.getBirtDate()}'
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

    return new User(result[0][0].id, result[0][0].email, result[0][0].password, result[0][0].name, result[0][0].birthDate);
  }

  public async getUserById(id: string): Promise<User | undefined> {
    const result = await this.connection.raw(
      `SELECT * FROM ${this.userTableName} WHERE id='${id}'`
    );

    return new User(result[0][0].id, result[0][0].email, result[0][0].password, result[0][0].name, result[0][0].birthDate);
  }

  public async createUserFollowRelation(followerId: string, followedId: string): Promise<void> {
    await this.connection.raw(
      `INSERT INTO followers (follower_id, followed_id) 
      VALUES('${followerId}','${followedId}');`
    );

    const videosResult = await this.connection.raw(
      `SELECT videos.*, users.email, users.name 
      FROM videos
      JOIN users on users.id = videos.userId
      WHERE userId= '${followedId}';`
    )

    const promisesArray = videosResult[0].map(async (video: any) => {
      return await this.connection.raw(
        `INSERT INTO video_feed
        (userId,
        videoId,
        title,
        postDate,
        authorEmail,
        authorName,
        authorId)
        VALUES
        ('${followerId}',
        '${video.id}',
        '${recipe.title}',
        '${recipe.description}',
        '${recipe.creationDate.toISOString().slice(0, 19).replace('T', ' ')}',
        '${recipe.email}',
        '${recipe.name}',
        '${recipe.userId}');`
      )
    })

    await Promise.all(promisesArray)
  }

  public async changePassword(newPassword: string, userId: string): Promise<void> {
    await this.connection.raw(
      `UPDATE users 
      SET password = '${newPassword}'
      WHERE id = '${userId}';`
    )
  }

  public async changeName(newName: string, userId: string): Promise<void> {
    await this.connection.raw(
      `UPDATE users 
        SET name = '${newName}'
        WHERE id = '${userId}';`
    )
  }

  public async changeEmail(newEmail: string, userId: string): Promise<void> {
    await this.connection.raw(
      `UPDATE users 
          SET email = '${newEmail}'
          WHERE id = '${userId}';`
    )
  }

}