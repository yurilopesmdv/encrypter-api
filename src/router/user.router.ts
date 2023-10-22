import userController from "@/controller/user.controller";
import { Router } from "express";

const userRouter = Router();

userRouter
  .post('/sign-up', userController.createUser)
  .post('/sign-in', userController.login)

export default userRouter;