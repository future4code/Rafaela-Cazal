import { Request, Response } from "express";
import { UserDB } from "../../../data/userDB";
import { FriendshipRelationUC } from "../../../business/usecases/user/friendshipRelation";
import * as jwt from "jsonwebtoken";

export const friendshipRelationEndpoint = async (req: Request, res: Response) => {
  try {
    const token = jwt.verify(req.headers.auth as string, process.env.JWT_KEY as string) as { userId: string }

    const friendshipRelationUC = new FriendshipRelationUC (new UserDB());

    const result = await friendshipRelationUC.execute({
      userId: token.userId,
      friendId: req.body.friendId
    });
    
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      message: err.message,
      ...err
    });
  }
};