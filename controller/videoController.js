import { videos } from "../db";
import routes from "../routes";
export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};

export const search = (req, res) => {
  const {
    query: { term: searchingFor },
  } = req;
  res.render("search", {
    pageTitle: "search",
    searchingFor: searchingFor,
    videos,
  });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const postUpload = (req, res) => {
  const {
    body: { file, title, description },
  } = req;
  // To Do: Upload and save video
  console.log(file, title, description);
  res.redirect(routes.videoDetail(32029303));
};

export const videoDetail = (req, res) => {
  const {
    params: { id },
  } = req;
  res.render("videoDetail", { pageTitle: "Video Detail", id });
};

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "editVideo" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Home" });
