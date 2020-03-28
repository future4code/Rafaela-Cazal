import { Request, Response } from "express";
import { UserDB } from "../../../data/userDB";
import * as jwt from "jsonwebtoken";
import { CancelFriendshipRelationUC } from "../../../business/usecases/user/cancelFriendship";

export const cancelFriendshipEndpoint = async (req: Request, res: Response) => {

  try {
    const token = jwt.verify(req.headers.auth as string, process.env.JWT_KEY as string) as { userId: string }

    const cancelFriendshipRelationUC = new CancelFriendshipRelationUC (new UserDB());

    const result = await cancelFriendshipRelationUC.execute({
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