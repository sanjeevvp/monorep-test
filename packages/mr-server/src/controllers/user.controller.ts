import { Request, Response } from "express"
import { IUser, User } from "@sanjeevvp/mr-models"

export async function getAllUsers(req: Request, res: Response) {
  const users: IUser[] = await User.find()
  return res.jsonp(users)
}
