import express from "express";
const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("user index"));
userRouter.get("/edit", (req, res) => res.send("user edit"));
userRouter.get("/passord", (req, res) => res.send("user passord"));

export default userRouter;
