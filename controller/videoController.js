// import { videos } from "../db";
import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({ createdAt: -1 });
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
    fileUrl: path,
    title,
    description,
  });

  console.log(newVideo);

  // To Do: Upload and save video
  res.redirect(routes.home);
};

export const videoDetail = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const video = await Video.findById({ _id: id });

    res.render("videoDetail", {
      pageTitle: "Video Detail",
      video,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getEditVideo = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const video = await Video.findById({ _id: id });
    res.render("editVideo", { pageTitle: "editVideo", video });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postEditVideo = async (req, res) => {
  try {
    const {
      params: { id },
      body: { title, description },
    } = req;
    await Video.findByIdAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const deleteVideo = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    await Video.findOneAndRemove({ _id: id });

    res.redirect(routes.home);
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};
