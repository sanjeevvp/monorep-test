import { Router } from "express"
import userRouter from "./user.route"

const router = Router()

// Return all user info
router.use("user", userRouter)

//testing
export default router
