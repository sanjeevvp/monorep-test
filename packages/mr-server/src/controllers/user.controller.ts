import { Request, Response } from "express"

export async function getAllUsers(req: Request, res: Response) {
  return res.sendStatus(200)
}
