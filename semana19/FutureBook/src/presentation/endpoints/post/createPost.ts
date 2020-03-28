import { Request, Response } from "express";
import { CreatePostUC } from "../../../business/usecases/post/createPost";
import { PostDB } from "../../../data/postDB";
import * as jwt from "jsonwebtoken";


export const createPostEndpoint = async (req: Request, res: Response) => {
  try {

    const token = jwt.verify(req.headers.auth as string, process.env.JWT_KEY as string) as {authorId: string}

    const authorId = token.authorId;

    const createPostUC = new CreatePostUC (new PostDB());

    const result = await createPostUC.execute({
        postId: req.body.postId,
        authorId,
        description: req.body.description,
        creationDate: req.body.creationDate,
        type: req.body.type,
        photo: req.body.photo
    });
    
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      message: err.message,
      ...err
    });
  }
};
