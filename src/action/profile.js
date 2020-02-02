import axios from "axios";
import { setAlert } from "./alert";

import { GET_PROFILE, PROFILE_ERROR, LOGOUT } from "./types";

const user_id = localStorage.getItem("user");
const token = localStorage.getItem("token");
//Get current profile

export const getCurrentProfile = (jwt, userid) => async dispatch => {
  try {
    console.log(token, user_id);
    const res = await axios.get("http://localhost:1337/users/" + user_id, {
      headers: {
        Authorization: "Bearer " + token
      }
    });
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Edit & Update Profile
export const editProfile = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        Authorization: "Bearer " + [token]
      }
    };
    const res = await axios.put(
      "http://localhost:1337/users/" + localStorage.user,
      formData,
      {
        headers: {
          Authorization: "Bearer " + [token]
        }
      }
    );
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
    dispatch(setAlert("Profile Updated", "success"));
    //history.push("/profile");
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: err
    });
  }
};
// Delete Profile
export const deleteProfile = () => async dispatch => {
  try {
    const config = {
      headers: {
        Authorization: "Bearer " + [token]
      }
    };
    const res = await axios.delete(
      "http://localhost:1337/users/" + localStorage.user,

      {
        headers: {
          Authorization: "Bearer " + [token]
        }
      }
    );
    dispatch({
      type: LOGOUT,
      payload: res.data
    });
    dispatch(setAlert("Profile Deleted", "success"));
    //history.push("/profile");
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: err
    });
  }
};
