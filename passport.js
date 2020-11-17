import passport from "passport";
import GithubStrategy from "passport-github";
import { githubLoginCallback } from "./controller/userController";
import User from "./models/User";
import routes from "./routes";

passport.use(User.createStrategy());
/* 
  /auth/github => passport.authenticate("github")
  => GithubStrategy => 정보(콜백url과 함께)를 받은후 깃서버로 => /auth/github/callback => githubcallback() => 검증후 => 로그인!!, 세션!!, 쿠키!!
*/
passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `http://localhost:4000${routes.githubCallback}`,
    },
    githubLoginCallback
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
