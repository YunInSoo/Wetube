const HOME = "/";
const SEARCH = "/search";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

//Users
const USERS = "/users";
const USER_DETATL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

//Videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETATL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
  //global
  home: HOME,
  search: SEARCH,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  //user
  users: USERS,
  userDetail: id => {
    if (id) {
      return `${USERS}/${id}`;
    } else {
      return USER_DETATL;
    }
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  //videos
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: id => {
    if (id) {
      return VIDEOS + `/${id}`;
    } else {
      return VIDEO_DETATL;
    }
  },
  editVideo: id => {
    if (id) {
      return VIDEOS + `/${id}/edit`;
    } else {
      return EDIT_VIDEO;
    }
  },
  deleteVideo: id => {
    if (id) {
      return VIDEOS + `/${id}/delete`;
    } else {
      return DELETE_VIDEO;
    }
  },
};

export default routes;
