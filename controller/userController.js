import routes from "../routes";
export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "join" });
};

export const postJoin = (req, res) => {
  const {
    body: { password, password2 },
  } = req;

  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    //To Do: Register User
    //To Do: Log user in
    res.redirect(routes.home);
  }
  res.render("join", { pageTitle: "join" });
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login In" });
export const postLogin = (req, res) => {
  const {
    body: { email, password },
  } = req;

  res.redirect(routes.home);
};

export const logout = (req, res) => {
  res.redirect(routes.home);
};

export const users = (req, res) => res.render("logout", { pageTitle: "users" });

export const userDetail = (req, res) => {
  console.log("dfsdf");
  res.render("userDetail", { pageTitle: "userDetail" });
};

export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "editProfile" });

export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "changePassword" });
