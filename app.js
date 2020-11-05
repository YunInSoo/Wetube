import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookiePaser from "cookie-parser";
import bodyPaser from "body-parser";
import { localsMiddleware } from "./middlewares";
import userRouter from "./router/userRouter";
import videoRouter from "./router/videoRouter";
import globalRouter from "./router/globalRouter";
import routes from "./routes";

const app = express();

const handleHome = (req, res) => res.send("Hello from home");

const betweenHome = (req, res, next) => {
  console.log("I'm between");
  next();
};

app.use(helmet());
app.use(localsMiddleware);
//밑에 부분은 views템플리안있는 영역을 건들수 있게 도와주는 부분입니다.
app.set("view engine", "pug");
//middleware 부분
app.use(cookiePaser());
app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: true }));
app.use(morgan("dev"));

/*middleware 예제 get, post 안에 넣어도 되고 
그냥 전체적인 middleware 사용하기 위해서는 
여기에다가 집어넣으면 됩니다*/
app.use(betweenHome);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
