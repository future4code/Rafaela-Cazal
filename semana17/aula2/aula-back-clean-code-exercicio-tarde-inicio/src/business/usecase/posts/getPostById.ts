import { PostDB } from "../../../data/postDataBase";
import { PostType } from "../../entities/post";
import { InvalidParameterError } from "../../error/InvalidParameterError";

export class GetPostByIdUC {
  constructor(private db: PostDB) {}

  public async execute(input: GetPostByIdUCInput): Promise<GetPostByIdUCOutput> {
    if (input.id === "") {
      throw new InvalidParameterError("Id must not be an empty string");
    }

    const post = await this.db.getPost(input.id);


  if (!post) {
    throw new Error("User not found");
  }

  return {
    id: post.getId(),
    title: post.getTitle(),
    content: post.getContent(),
    image: post.getImage(),
    type: post.getType(),
    userId: post.getUserId(),
    userName: post.getUser().getName()

}

}
}

export interface GetPostByIdUCInput {
  id: string;
}

export interface GetPostByIdUCOutput {
  id: string;
  title: string;
  content: string;
  image?: string;
  type: PostType;
  userId: string;
  userName: string;
}