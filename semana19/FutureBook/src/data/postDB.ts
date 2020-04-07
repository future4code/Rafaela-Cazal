import { BaseDB } from "./baseDB";
import { PostGateway } from "../business/gateways/postGateway";
import { Post } from "../business/entities/post";

export class PostDB extends BaseDB implements PostGateway {
     
    private postTableName = "posts";

    public async createPost(post: Post): Promise<void> {
        await this.connection.raw(`
          INSERT INTO ${this.postTableName} (postId, authorId, description, creationDate, type, photo) 
          VALUES(
            '${post.getPostId()}',
            '${post.getAuthorId()}',
            '${post.getDescription()}',
            '${post.getCreationDate().toISOString().slice(0, 19).replace('T', ' ')}',
            '${post.getType()}',
            '${post.getPhoto()}'
          );`
        )
      }
    
}
    
  
  