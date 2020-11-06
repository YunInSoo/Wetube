import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  res.test = "hi";
  next();
};

export const securityPolicy = (req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' https://apis.google.com"
  );
  next();
};
