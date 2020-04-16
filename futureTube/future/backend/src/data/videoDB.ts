import { VideoGateway } from "../business/gateways/videoGateway";
import { BaseDB } from "./baseDB";
import { Video } from "../business/entities/video";


export class VideoDB extends BaseDB implements VideoGateway {
  private videoTableName = "videos";

  public async createRecipe(video: Video): Promise<void> {
    await this.connection.insert({
      id: video.getId(),
      title: video.getTitle(),
      description: video.getDescription(),
      postDate: video.getPostDate(),
      userId: video.getUserId()
    }).into(this.videoTableName)

    const authorId = video.getUserId()

    const FollowerId = await this.connection.raw(
      `SELECT followers.follower_id 
      FROM followers 
      WHERE followed_id = '${authorId}'`
    )

    const authorData = await this.connection.raw(
      `SELECT email, name
      FROM users 
      WHERE id = '${authorId}';`
    )

    const promisesArray = FollowerId[0].map(async (follower:any) => {
      return await this.connection.raw(
      `INSERT INTO feed
      (userId,
      recipeId,
      title,
      description,
      creationDate,
      authorEmail,
      authorName,
      authorId)
      VALUES
      ('${follower.follower_id}',
      '${video.getId()}',
      '${video.getTitle()}',
      '${video.getDescription()}',
      '${video.getPostDate().toISOString().slice(0, 19).replace('T', ' ')}',
      '${authorData[0][0].email}',
      '${authorData[0][0].name}',
      '${video.getUserId()}');`
      ) 
    })

    await Promise.all(promisesArray)
  }
}