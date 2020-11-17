import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "join" });
};

export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, password2 },
  } = req;

  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    // To Do: Register User
    try {
      const user = await User({ name, email });
      await User.register(user, password);

      next();
    } catch (err) {
      console.log(err);
      res.redirect(routes.home);
    }
    // To Do: Log user in
  }
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login In" });

export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home,
});

export const githubLogin = passport.authenticate("github");

export const githubLoginCallback = async (_, __, profile, cb) => {
  const {
    _json: { id, avatar_url: avatarUrl, name, email },
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.githubId = id;
      user.save();
      return cb(null, user);
    }
    const newUser = await User.create({
      email,
      name,
      githubId: id,
      avatarUrl,
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};

export const postGithubLogIn = (req, res) => {
  res.redirect(routes.home);
};

export const successLogin = (req, res) => {
  console.log(req);
  res.render(routes.home);
};

export const logout = (req, res) => {
  console.log("logout");
  // req.flash("info", "Logged out, see you later");
  req.logout();
  res.redirect(routes.home);
};

// export const users = (req, res) => res.render("logout", { pageTitle: "users" });
export const getMe = (req, res) => {
  res.render("userDetail", { pageTitle: "User Detail", user: req.user });
};

export const userDetail = (req, res) => {
  console.log("dfsdf");
  res.render("userDetail", { pageTitle: "userDetail" });
};

export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "editProfile" });

export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "changePassword" });
