import Router from "express-promise-router"
import { getAllUsers } from "../controllers/user.controller"

const router = Router()

router.get("/", [getAllUsers])
