const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//Users
const USERS = "/users";
const USER_DETATL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "change-password";

//Videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETATL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
  //global
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  //user
  users: USERS,
  userDetail: USER_DETATL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  //videos
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: VIDEO_DETATL,
  editVideo: EDIT_VIDEO,
  deleteVideo: DELETE_VIDEO,
};

export default routes;