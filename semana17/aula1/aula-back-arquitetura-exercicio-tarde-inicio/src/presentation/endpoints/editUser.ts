import { Request, Response } from "express";
import { EditUserUC } from "../../business/usecase/editUser";
import { UserDB } from "../../data/userDataBase";

export const editUserEndpoint = async (req: Request, res: Response) => {
  try {
    const editUserUC = new EditUserUC(new UserDB());
    const result = editUserUC.execute({
      id: req.body.id,
      email: req.body.email,
      name: req.body.name

    });
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(400).send({
      message: err.message,
      ...err
    });
  }
};
