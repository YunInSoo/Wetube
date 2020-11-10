import express from "express";
import {
  getUpload,
  postUpload,
  videoDetail,
} from "../controller/videoController";
import { uploadVideo } from "../middlewares";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);
videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;
