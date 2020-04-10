import { FeedGateway } from "../business/gateways/feedGateway";
import { BaseDB } from "./baseDB";
import { Feed } from "../business/entities/feed";


export class FeedDB extends BaseDB implements FeedGateway {
  private feedTableName = "feed";

  public async getFeed(userId: string): Promise<Feed[]> {
    const response = await this.connection.raw(
    `SELECT * FROM ${this.feedTableName}
    WHERE userId = '${userId}'
    ORDER BY postDate DESC;`)

    return response[0].map((video: any) => {
      return new Feed(
        video.videoId,
        video.userFeed, 
        video.title, 
        video.description,
        video.postDate,
        video.type, 
        video.userId,
        video.video,
        video.userEmail, 
        video.userName)
    })
  }
}