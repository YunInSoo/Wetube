// import { videos } from "../db";
import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    console.log(videos);
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
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

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  console.log(`path: ${path}`);
  const newVideo = await Video.create({
    fileUrl: `/${path}`,
    title,
    description,
  });

  console.log(newVideo);

  // To Do: Upload and save video
  res.render("upload", { pageTitle: "Upload" });
};

export const videoDetail = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const videoDetail = await Video.findById({ _id: id });
    const { title, fileUrl, createdAt } = videoDetail;

    res.render("videoDetail", {
      pageTitle: "Video Detail",
      title,
      fileUrl,
      createdAt,
      id,
    });
  } catch (error) {
    console.log(error);
  }
};

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "editVideo" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Home" });
