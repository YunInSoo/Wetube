import express from "express";

const videoRouter = express.Router();

videoRouter.get("/", (req, res) => {
  console.log(`viedo router`);
  res.send(`viedo router`);
});

export default videoRouter;
