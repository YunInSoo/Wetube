import express from "express";
import {
  changePassword,
  editProfile,
  users,
} from "../controller/userController";
const userRouter = express.Router();

userRouter.get("/", users);
userRouter.get("/edit", editProfile);
userRouter.get("/password", changePassword);

export default userRouter;
