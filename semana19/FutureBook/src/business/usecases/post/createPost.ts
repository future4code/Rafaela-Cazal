
import { PostGateway } from "../../gateways/postGateway";
import { Post } from "../../entities/post";
import { v4 } from "uuid";

export class CreatePostUC {
    constructor(private postGateway: PostGateway) { }

    public async execute(input: CreatePostUCInput): Promise<CreatePostUCOutput | undefined> {
        try {

            const postId = v4();
           
            if (!input) {
                return undefined
            }

            const newPost = new Post(postId, input.authorId, input.description, new Date, input.type, input.photo)

            await this.postGateway.createPost(newPost);

            return {
                message: "Post criado com sucesso: "
            };
        } catch (err) {
            console.log(err)
            throw new Error("Erro ao criar post")
        }
    }
}

export interface CreatePostUCInput {
    postId: string,
    authorId: string,
    description: string,
    creationDate: Date,
    type: string,
    photo?: string
}

export interface CreatePostUCOutput {
    message: string;
}
