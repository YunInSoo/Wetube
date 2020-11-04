import express from "express";
import morgan from "morgan";

const app = express();

const PORT = 4000;

const handleHome = (req, res) => res.send("Hello from home");

const betweenHome = (req, res, next) => {
  console.log("I'm between");
  next();
};

app.use(morgan("common"));

app.get("/", betweenHome, handleHome);

const handlelistening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

app.listen(PORT, handlelistening);
