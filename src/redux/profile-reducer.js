import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SET_PHOTO = "SET_PHOTO";

let initialState = {
  posts: [
    { id: 1, message: "I love you", likesCount: 5 },
    { id: 2, message: "I hate you", likesCount: 8 },
    { id: 3, message: "I fuck you", likesCount: 13 },
    { id: 4, message: "I love you", likesCount: 0 },
    { id: 5, message: "I hate you", likesCount: 111 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = { id: 6, message: action.newPostBody, likesCount: 0 };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case SET_PHOTO:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostBody) => ({
  type: ADD_POST,
  newPostBody,
});
const setStatus = (status) => ({ type: SET_STATUS, status });
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
const mountPhotoSuccess = (photos) => ({ type: SET_PHOTO, photos });

export const getUserProfile = (userId) => async (dispatch) => {
  let data = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(data));
};

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const selectedPhoto = (photo) => async (dispatch) => {
  let response = await profileAPI.mountPhoto(photo);
  if (response.data.resultCode === 0) {
    dispatch(mountPhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profileData) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profileData);
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))
    return Promise.reject(response.data.messages[0])
  }
}

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export default profileReducer;
